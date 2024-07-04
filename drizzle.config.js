/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://neondb_owner:c9MtquNJ6IQW@ep-patient-grass-a1l0v2rj.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
    }
  };
  