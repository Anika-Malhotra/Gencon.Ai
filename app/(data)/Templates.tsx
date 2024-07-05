export default [
  {
    name: 'Blog Title',
    desc:'An AI powered tool that generates titles suitable to your blogs content.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/2593/2593549.png',
    aiPrompt:'Give me the top 5 most suitable topic ideas in bullet points based on the niche & outline of blog',
    slug:'generate-blog-title',
    form:[
        {
            label:'Enter your blog niche',
            field:'input',
            name:'niche',
            required:true
        },
        {
            label:'Enter blog outline',
            field:'textarea',
            name:'outline',
        }
    ]
},
{
    name: 'Blog Content',
    desc: 'An AI powered tool that generates content based on your blog topic.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/8980/8980709.png',
    aiPrompt: 'Generate content based on the following blog topic and outline',
    slug: 'generate-blog-content',
    form: [
      {
        label: 'Enter blog topic',
        field: 'input',
        name: 'topic',
        required: true
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
},
{
    name: 'Blog Topic Ideas',
    desc: 'An AI powered tool that generates topic ideas for your blog.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/16683/16683338.png',
    aiPrompt: 'Generate topic ideas based on the following blog niche',
    slug: 'generate-blog-topic-ideas',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true
      }
    ]
},
{
    name: 'YouTube Description',
    desc: 'An AI powered tool that generates descriptions for your YouTube videos.',
    category: 'YouTube',
    icon: 'https://cdn-icons-png.flaticon.com/128/10101/10101391.png',
    aiPrompt: 'Generate a YouTube video description based on the following video title and content outline',
    slug: 'generate-youtube-description',
    form: [
      {
        label: 'Enter video title',
        field: 'input',
        name: 'title',
        required: true
      },
      {
        label: 'Enter video content outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
},
{
    name: 'YouTube Tags',
    desc: 'An AI powered tool that generates tags for your YouTube videos.',
    category: 'YouTube',
    icon: 'https://cdn-icons-png.flaticon.com/128/11513/11513415.png',
    aiPrompt: 'Generate YouTube tags based on the following video title and content',
    slug: 'generate-youtube-tags',
    form: [
      {
        label: 'Enter video title',
        field: 'input',
        name: 'title',
        required: true
      },
      {
        label: 'Enter video content outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
},
{
    name: 'Rewrite Article (Plagiarism Free)',
    desc: 'An AI powered tool that rewrites articles to ensure they are plagiarism-free.',
    category: 'Article',
    icon: 'https://cdn-icons-png.flaticon.com/128/11516/11516506.png',
    aiPrompt: 'Rewrite the following article to ensure it is plagiarism-free',
    slug: 'rewrite-article',
    form: [
      {
        label: 'Enter article text',
        field: 'textarea',
        name: 'article',
        required: true
      }
    ]
},
{
    name: 'Add Emojis to Text',
    desc: 'An AI powered tool that adds emojis to your text to make it more engaging.',
    category: 'Text',
    icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584602.png',
    aiPrompt: 'Add emojis to the following text to make it more engaging',
    slug: 'add-emojis-to-text',
    form: [
      {
        label: 'Enter your text',
        field: 'textarea',
        name: 'text',
        required: true
      }
    ]
},
{
    name: 'Instagram Post Generator',
    desc: 'An AI powered tool that generates Instagram posts based on your input.',
    category: 'Instagram',
    icon: 'https://cdn-icons-png.flaticon.com/128/15047/15047534.png',
    aiPrompt: 'Generate an Instagram post based on the following input',
    slug: 'generate-instagram-post',
    form: [
      {
        label: 'Enter post idea',
        field: 'textarea',
        name: 'postIdea',
        required: true
      }
    ]
},
{
    name: 'Instagram Hashtag Generator',
    desc: 'An AI powered tool that generates hashtags for your Instagram posts.',
    category: 'Instagram',
    icon: 'https://cdn-icons-png.flaticon.com/128/5380/5380100.png',
    aiPrompt: 'Generate Instagram hashtags based on the following post idea',
    slug: 'generate-instagram-hashtags',
    form: [
      {
        label: 'Enter post idea',
        field: 'textarea',
        name: 'postIdea',
        required: true
      }
    ]
  },
  {
    name: 'Grammar Checker',
    desc: 'An AI powered tool that checks and corrects grammar in your text.',
    category: 'Text',
    icon: 'https://cdn-icons-png.flaticon.com/128/6749/6749514.png',
    aiPrompt: 'Check and correct the grammar of the following text',
    slug: 'grammar-checker',
    form: [
      {
        label: 'Enter text to check',
        field: 'textarea',
        name: 'text',
        required: true
      }
    ]
  },
  {
    name: 'Text Improver',
    desc: 'An AI powered tool that improves the quality of your text.',
    category: 'Text',
    icon: 'https://cdn-icons-png.flaticon.com/128/9422/9422790.png',
    aiPrompt: 'Improve the quality of the following text',
    slug: 'text-improver',
    form: [
      {
        label: 'Enter text to improve',
        field: 'textarea',
        name: 'text',
        required: true
      }
    ]
  }


];
