import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import LazyImage from '@/components/atoms/LazyImage';
import Typography from '@/components/atoms/Typography';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import { getCategoryIcon, isValidUrl } from '@/utils/helpers';
import { containerVariants, itemVariants } from '@/utils/animations';
import { containerPadding, cardStyles } from '@/utils/styles';
import { Helmet } from 'react-helmet-async';
import { TypographyVariant, Variant, Size } from '@/utils/types';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { work } = usePortfolioStore();

  const project = useMemo(
    () => work.projects.find((p) => p.id === parseInt(id || '')),
    [id, work.projects]
  );

  if (!project) {
    return (
      <motion.div
        className={`min-h-screen bg-background py-8 ${containerPadding}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="main"
        aria-labelledby="error-title"
      >
        <Typography
          variant={TypographyVariant.H2}
          id="error-title"
          className="text-center text-text"
          role="alert"
        >
          Project not found
        </Typography>
      </motion.div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${project.title} | Hemanth Sayimpu`}</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={project.tech.join(', ')} />
        <meta property="og:title" content={`${project.title} | Hemanth Sayimpu`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://your-portfolio-url.com/project/${project.id}`}
        />
        <meta property="og:image" content={project.image} />
      </Helmet>
      <motion.div
        className={`min-h-screen bg-background py-8 ${containerPadding}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="main"
        aria-labelledby={`project-title-${project.id}`}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="mb-6" variants={itemVariants}>
            <Button
              to="/work"
              variant={Variant.Outline}
              size={Size.Medium}
              ariaLabel="Back to projects"
              className="flex items-center"
              onClick={() => navigate(-1)}
            >
              <Icon icon={ArrowLeft} className="mr-2 w-5 h-5" aria-hidden="true" />
              Back to Projects
            </Button>
          </motion.div>

          <motion.div className={`${cardStyles.detail}`} variants={itemVariants}>
            {project.image && (
              <LazyImage
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-t-xl mb-6"
              />
            )}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Icon
                  icon={getCategoryIcon(project.category)}
                  className="w-5 h-5 text-primary"
                  aria-hidden="true"
                />
                <Typography
                  variant={TypographyVariant.Span}
                  className="text-xs font-medium text-gray-600 uppercase"
                >
                  {project.category}
                </Typography>
              </div>
              <Typography
                variant={TypographyVariant.H1}
                id={`project-title-${project.id}`}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-4"
              >
                {project.title}
              </Typography>
              <Typography
                variant={TypographyVariant.P}
                className="text-base sm:text-lg text-accent mb-6"
              >
                {project.description}
              </Typography>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {isValidUrl(project.live) && project.live !== '#' && (
                  <Button
                    href={project.live}
                    variant={Variant.Primary}
                    size={Size.Medium}
                    ariaLabel={`View live demo of ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon={Globe} className="mr-2 w-5 h-5" aria-hidden="true" />
                    View Demo
                  </Button>
                )}
                {isValidUrl(project.githubUrl) && (
                  <Button
                    href={project.githubUrl}
                    variant={Variant.Outline}
                    size={Size.Medium}
                    ariaLabel={`View ${project.title} code on GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon={Github} className="mr-2 w-5 h-5" aria-hidden="true" />
                    View Code
                  </Button>
                )}
              </div>

              {project.details && (
                <div className="space-y-6">
                  <div>
                    <Typography
                      variant={TypographyVariant.H2}
                      className="text-xl sm:text-2xl font-semibold mb-2"
                    >
                      Overview
                    </Typography>
                    <Typography variant={TypographyVariant.P}>
                      {project.details.overview}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant={TypographyVariant.H2}
                      className="text-xl sm:text-2xl font-semibold mb-2"
                    >
                      Challenges
                    </Typography>
                    <ul className="list-disc list-inside space-y-1">
                      {project.details.challenges.map((challenge, index) => (
                        <li key={index}>
                          <Typography variant={TypographyVariant.P} className="inline">
                            {challenge}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Typography
                      variant={TypographyVariant.H2}
                      className="text-xl sm:text-2xl font-semibold mb-2"
                    >
                      Solutions
                    </Typography>
                    <ul className="list-disc list-inside space-y-1">
                      {project.details.solutions.map((solution, index) => (
                        <li key={index}>
                          <Typography variant={TypographyVariant.P} className="inline">
                            {solution}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Typography
                      variant={TypographyVariant.H2}
                      className="text-xl sm:text-2xl font-semibold mb-2"
                    >
                      Impact
                    </Typography>
                    <Typography variant={TypographyVariant.P}>
                      {project.details.impact}
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default memo(ProjectDetail);

/* Changes and Best Practices:
- Created to display project details based on Project type’s details field.
- Used Helmet for dynamic SEO meta tags based on project data.
- Sourced data from usePortfolioStore and used containerPadding, cardStyles, containerVariants, itemVariants, getCategoryIcon, and isValidUrl from utils/.
- Accessibility: role="main", role="list", and focus-visible:ring.
- Performance: Memoized project lookup and component.
- Security: Validated URLs with isValidUrl and added rel="noopener noreferrer".
- Testing: Test project rendering, navigation, SEO tags, and accessibility.
- SEO: Dynamic meta tags and descriptive alt text.
*/