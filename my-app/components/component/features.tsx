import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectsData = [
  {
    id: 1,
    name: 'syntaxUI',
    description: 'Ready-to-use UI elements designed for rapid development.',
    link: '#',
    image: '/prettyfolio.png',
  },
  {
    id: 2,
    name: 'Prettyfolio',
    description: 'A curated collection of portfolios for inspiration.',
    link: '#',
    image: '/prettyfolio.png',
  },
  {
    id: 2,
    name: 'Enchant',
    description: 'A vibrant theme for Visual Studio Code.',
    link: '#',
    image: '/enchant.png',
  },
  {
    id: 3,
    name: 'Ansubkhan.com',
    description: 'My personal website, blogs and newsletter.',
    link: '#',
    image: '/portfolio.png',
  },
  {
    id: 4,
    name: 'Quote Vault',
    description: 'Social media, but for sharing quotes.',
    link: '#',
    image: '/quote-vault.png',
  },
  {
    id: 5,
    name: 'syntaxUI',
    description: 'Ready-to-use UI elements designed for rapid development.',
    link: '#',
    image: '/prettyfolio.png',
  },
]

const Features = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-x-10 md:grid-cols-3">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg border-gray-400 dark:border"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
                  {project.description}
                </div>
              </a>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Features