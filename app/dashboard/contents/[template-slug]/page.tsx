"use client"
import React, { useState } from 'react'
import OutputSection from '../_components/OutputSection'
import FormSection from '../_components/FormSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import moment from 'moment'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'

interface PROPS{
    params:{
        'template-slug':string
    }
}

function CreateNewContent(props:PROPS){

    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
    const [loading, setLoading]=useState(false);
    const [aiOutput,setAiOutput]=useState <string>('');
    const {user}=useUser();
    const GenerateAIContent=async(formData:any)=>{
        setLoading(true);
        const SelectedPrompt=selectedTemplate?.aiPrompt;

        const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;

        const result=await chatSession.sendMessage(FinalAIPrompt);
        const resultText = await result.response.text();
        console.log(resultText);
        setAiOutput(resultText);
        await SaveInDb(formData,selectedTemplate?.slug,resultText)
        setLoading(false);
    }
    const SaveInDb=async(formData:any,slug:any,aiOutput:string)=>{
        const result=await db.insert(AIOutput).values({
            formData:formData,
            templateSlug:slug,
            aiResponse:aiOutput,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD/MM/yyyy')
});
console.log(result);
    }
    return(
        <div className='p-10'>
            <Link href={"/dashboard"}>
        <Button><ArrowLeft/>Back</Button>
        </Link>
        <div  className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
            {/*form section*/}
            <FormSection selectedTemplate={selectedTemplate}
            userFormInput={(v:any)=>GenerateAIContent(v)}
            loading={loading}/>
            {/*output section*/}
            <div className='col-span-2'>
                <OutputSection aiOutput={aiOutput}/>
            </div>

        </div>
        </div>
    )
}

export default CreateNewContent