import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/projects-list";
import { ProjectsPageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const metadata = {
  title: 'Projetos'
}

const PROJECT_SLUGS_QUERY = `
  query {
    projects {
      slug
    }
  }
`;

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
  `;

  return fetchHygraphQuery(query, 60 * 60 * 24);
}

export async function generateStaticParams() {
  try {
    const data = await fetchHygraphQuery<{ projects: { slug: string }[] }>(PROJECT_SLUGS_QUERY);

    if (!data || !data.projects) {
      throw new Error('Invalid data structure received from Hygraph');
    }

    return data.projects.map(project => ({
      slug: project.slug
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    throw error; // Re-throw the error to fail the build if necessary
  }
}

export default async function Projects() {
  const { projects } = await getPageData();

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects}/>
    </>
  );
}
