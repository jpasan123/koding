import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Newspaper, Youtube, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

export const MediaSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState<'articles' | 'interviews'>('articles');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const tabVariants = {
    inactive: { 
      opacity: 0.7,
      scale: 0.95,
      y: 5,
      color: "#6B7280",
    },
    active: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      color: "#27026c",
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Sample data for articles
  const articles = [
    {
      title: "Jendo Innovations Profile",
      source: "F6S",
      date: "2019-11-22",
      excerpt: "Pioneering AI-driven diagnostics for cardiovascular health...",
      imageUrl: "https://i.ibb.co/JFpQZGFW/616962-large.jpg", // Fixed URL
      link: "https://www.f6s.com/company/jendoinnovations2#about",
    },
    {
      title: "The JKX Open Innovation Challenge Finale",
      source: "Roar Media",
      date: "2018-09-30",
      excerpt: "Innovative healthtech solutions at the forefront of Sri Lanka's startup ecosystem...",
      imageUrl: "https://i.ibb.co/MyVP47w8/Cover-maybe-X-e1478185235968.jpg", // Fixed URL
      link: "https://roar.media/english/tech/events/the-jkx-open-innovation-challenge-finale",
    },
    {
      title: "John Keells X Rewards Winners of Innovation Challenge",
      source: "Sunday Observer",
      date: "2016-11-13",
      excerpt: "Recognizing breakthrough innovations in healthcare technology...",
      imageUrl: "https://i.ibb.co/7Jqvjx4j/z-p47-John-Keells.jpg",
      link: "http://www.sundayobserver.lk/2016/11/13/business/john-keells-x-rewards-winners-innovation-challenge",
    },
    {
      title: "SL Start-up in Healthcare Breakthrough",
      source: "Sunday Times",
      date: "2019-12-29",
      excerpt: "Local innovation making waves in global healthcare technology...",
      imageUrl: "https://i.ibb.co/kg1G2wm7/download-2.jpg",
      link: "https://www.sundaytimes.lk/191229/business-times/sl-start-up-in-healthcare-breakthrough-384925.html",
    },
    {
      title: "John Keells X Announces Winners of the Open Innovation Challenge",
      source: "AdaDerana",
      date: "2018-06-20",
      excerpt: "Healthcare innovation takes center stage in Sri Lanka's premier startup competition...",
      imageUrl: "https://i.ibb.co/7Jqvjx4j/z-p47-John-Keells.jpg",
      link: "http://bizenglish.adaderana.lk/john-keells-x-announces-winners-of-the-open-innovation-challenge/",
    },
    {
      title: "Innovation in Healthcare Technology",
      source: "Sunday Times",
      date: "2018-08-05",
      excerpt: "Pioneering solutions for cardiovascular health monitoring...",
      imageUrl: "https://i.ibb.co/yx7mg7v/unnamed.png",
      link: "https://www.pressreader.com/sri-lanka/sunday-times-sri-lanka/20180805/282823601995067",
    },
  ];

  // Sample data for TV interviews
  const interviews = [
    {
      title: "Revolutionary Healthcare Technology",
      channel: "Tech Today",
      date: "2022-03-15",
      description: "Discussing innovations in cardiovascular health monitoring",
      thumbnailUrl: "https://img.youtube.com/vi/F-KEnSZ2KzI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=F-KEnSZ2KzI",
    },
    {
      title: "The Future of AI in Healthcare",
      channel: "Health & Tech",
      date: "2021-11-10",
      description: "Exploring the intersection of artificial intelligence and medical diagnostics",
      thumbnailUrl: "https://img.youtube.com/vi/bcE8pwGF3Zw/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=bcE8pwGF3Zw",
    },
    {
      title: "Startup Success Story",
      channel: "Entrepreneurs Today",
      date: "2020-08-22",
      description: "From concept to market-leading healthcare solution",
      thumbnailUrl: "https://img.youtube.com/vi/WXkKLaiwbIM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=WXkKLaiwbIM",
    },
    {
      title: "Innovations in Cardiovascular Monitoring",
      channel: "Medical Frontiers",
      date: "2021-05-17",
      description: "Breaking new ground in early detection technology",
      thumbnailUrl: "https://img.youtube.com/vi/-bqUvBCFQxk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=-bqUvBCFQxk",
    },
    {
      title: "Building a Healthtech Ecosystem",
      channel: "Future Tech",
      date: "2022-01-30",
      description: "Creating collaborative innovation in the medical technology space",
      thumbnailUrl: "https://img.youtube.com/vi/MKTUO5NX1Qg/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=MKTUO5NX1Qg",
    },
    {
        title: "UNIQ - A talk with Eng. Heminda Jayaweera | Entrepreneurship Through Innovation.",
        channel: "Royal College Young Inventors Club",
        date: "2020-12-05",
        description: "Entrepreneurship Through Innovation.",
        thumbnailUrl: "https://i.ibb.co/zH6qN2W4/OVP.jpg",
        videoUrl: "https://www.youtube.com/watch?v=QjWVwiXmi34",
    }
  ];

  // Pagination calculations for articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="media" className="section-padding bg-[#f5f7fb]" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Media & Publications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our journey through media coverage, interviews, and publications
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mt-10 mb-12">
            <div className="bg-white rounded-full shadow-md inline-flex p-1">
              <motion.button
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium`}
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === 'articles' ? 'active' : 'inactive'}
                onClick={() => setActiveTab('articles')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Newspaper size={18} />
                Articles & Publications
              </motion.button>
              
              <motion.button
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium`}
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === 'interviews' ? 'active' : 'inactive'}
                onClick={() => setActiveTab('interviews')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Youtube size={18} />
                TV Interviews
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Newspaper Articles */}
        {activeTab === 'articles' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {currentArticles.map((article, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                      onError={(e) => {
                        // Fallback image in case of loading errors
                        e.currentTarget.src = "https://via.placeholder.com/400x225?text=Image+Unavailable";
                      }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#27026c]/10 text-[#27026c] text-xs px-3 py-1 rounded-full font-medium">
                        {article.source}
                      </span>
                      <span className="text-gray-500 text-xs ml-2">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#27026c] font-medium text-sm transition-all hover:gap-3"
                    >
                      Read Article
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="inline-flex items-center bg-white rounded-full shadow-md">
                  <motion.button
                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-l-full ${currentPage === 1 ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-100'}`}
                    whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
                    whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
                  >
                    <ChevronLeft size={20} />
                  </motion.button>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`w-10 h-10 rounded-full text-sm font-medium ${
                        currentPage === index + 1 
                          ? 'bg-[#27026c] text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      whileHover={currentPage !== index + 1 ? { scale: 1.1 } : {}}
                      whileTap={{ scale: 0.95 }}
                    >
                      {index + 1}
                    </motion.button>
                  ))}
                  
                  <motion.button
                    onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-r-full ${currentPage === totalPages ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-100'}`}
                    whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
                    whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* TV Interviews */}
        {activeTab === 'interviews' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-10"
          >
            {interviews.map((interview, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={interview.thumbnailUrl} 
                    alt={interview.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/640x360?text=Video+Thumbnail+Unavailable";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={interview.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <Youtube size={30} className="text-red-600" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium">
                      {interview.channel}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {interview.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{interview.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {interview.description}
                  </p>
                  <a 
                    href={interview.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-600 font-medium text-sm transition-all hover:gap-3"
                  >
                    Watch Interview
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};