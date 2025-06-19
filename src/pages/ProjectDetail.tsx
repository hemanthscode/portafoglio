import { memo } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import LazyImage from '@/components/atoms/LazyImage';
import Typography from '@/components/atoms/Typography';
import { containerVariants } from '@/utils/animations';
import { projectDetailStyles } from '@/utils/styles';
import { Helmet } from 'react-helmet-async';
import { Github, Book, ExternalLink } from 'lucide-react';
import { isValidUrl } from '@/utils/helpers';
import { TypographyVariant, Variant, Size } from '@/utils/types';
import clsx from 'clsx';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { work } = usePortfolioStore();
  const project = work.projects.find((p) => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography variant={TypographyVariant.H2} className={projectDetailStyles.errorTitle}>
          Project Not Found
        </Typography>
      </div>
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
        <meta property="og:url" content={`https://hemanth.codes${project.projectPageUrl}`} />
        <meta property="og:image" content={project.image} />
      </Helmet>
      <motion.div
        className={clsx(projectDetailStyles.base, 'bg-background')}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="main"
        aria-labelledby="project-title"
      >
        <div className={projectDetailStyles.container}>
          <Button
            to="/work"
            variant={Variant.Outline}
            size={Size.Medium}
            className={projectDetailStyles.backButtonStyle}
            ariaLabel="Back to projects"
          >
            Back to Projects
          </Button>
          <div className={projectDetailStyles.card}>
            <LazyImage
              src={project.image}
              alt={`${project.title} preview`}
              className={projectDetailStyles.image}
              sizes="(max-width: 640px) 100vw, 800px"
            />
            <div className={projectDetailStyles.cardContent}>
              <div className={projectDetailStyles.category}>
                <Typography variant={TypographyVariant.Span}>
                  {project.category.toUpperCase()}
                </Typography>
              </div>
              <Typography
                variant={TypographyVariant.H1}
                id="project-title"
                className={projectDetailStyles.title}
                role="heading"
                aria-level={1}
              >
                {project.title}
              </Typography>
              <Typography variant={TypographyVariant.P} className={projectDetailStyles.description}>
                {project.description}
              </Typography>
              <div className={projectDetailStyles.techTags}>
                {project.tech.map((tech) => (
                  <span key={tech} className={projectDetailStyles.techTags}>
                    {tech}
                  </span>
                ))}
              </div>
              <motion.div className={projectDetailStyles.details} variants={containerVariants}>
                <div>
                  <Typography
                    variant={TypographyVariant.H3}
                    className={projectDetailStyles.sectionTitle}
                  >
                    Overview
                  </Typography>
                  <Typography
                    variant={TypographyVariant.P}
                    className={projectDetailStyles.sectionContent}
                  >
                    {project.details.overview}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant={TypographyVariant.H3}
                    className={projectDetailStyles.sectionTitle}
                  >
                    Challenges
                  </Typography>
                  <ul className={projectDetailStyles.list}>
                    {project.details.challenges.map((challenge, index) => (
                      <li key={index} className={projectDetailStyles.listItem}>
                        <Typography variant={TypographyVariant.P}>{challenge}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Typography
                    variant={TypographyVariant.H3}
                    className={projectDetailStyles.sectionTitle}
                  >
                    Solutions
                  </Typography>
                  <ul className={projectDetailStyles.list}>
                    {project.details.solutions.map((solution, index) => (
                      <li key={index} className={projectDetailStyles.listItem}>
                        <Typography variant={TypographyVariant.P}>{solution}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Typography
                    variant={TypographyVariant.H3}
                    className={projectDetailStyles.sectionTitle}
                  >
                    Impact
                  </Typography>
                  <Typography
                    variant={TypographyVariant.P}
                    className={projectDetailStyles.sectionContent}
                  >
                    {project.details.impact}
                  </Typography>
                </div>
              </motion.div>
              <div className="flex flex-wrap gap-4 mt-8">
                {isValidUrl(project.githubUrl) && (
                  <Button
                    href={project.githubUrl}
                    variant={Variant.Outline}
                    size={Size.Medium}
                    ariaLabel={`View ${project.title} code on GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<Github className="w-5 h-5" />}
                  >
                    Code
                  </Button>
                )}
                {isValidUrl(project.mediumPostUrl) && (
                  <Button
                    href={project.mediumPostUrl}
                    variant={Variant.Outline}
                    size={Size.Medium}
                    ariaLabel={`Read Medium post about ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<Book className="w-5 h-5" />}
                  >
                    Post
                  </Button>
                )}
                <Button
                  to="/work"
                  variant={Variant.Primary}
                  size={Size.Medium}
                  ariaLabel="Back to projects"
                  icon={<ExternalLink className="w-5 h-5" />}
                >
                  Back to Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default memo(ProjectDetail);