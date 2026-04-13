export default function Home() {
  const courses = [
    {
      id: 1,
      name: "Python基础",
      description: "学习Python编程语言的基础知识，包括语法、数据类型、控制结构等。",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20code%20on%20screen%2C%20modern%20clean%20design&image_size=landscape_16_9"
    },
    {
      id: 2,
      name: "数据分析技术",
      description: "学习数据分析的基本方法和工具，包括数据清洗、统计分析、数据可视化等。",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20dashboard%2C%20charts%20and%20graphs%2C%20modern%20design&image_size=landscape_16_9"
    },
    {
      id: 3,
      name: "数据采集与处理",
      description: "学习如何从各种来源采集数据，并进行预处理和转换，为分析做准备。",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20collection%20process%2C%20web%20scraping%2C%20modern%20design&image_size=landscape_16_9"
    },
    {
      id: 4,
      name: "供应链数据分析",
      description: "学习如何分析供应链数据，优化供应链流程，提高供应链效率。",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Supply%20chain%20management%20dashboard%2C%20logistics%20data%2C%20modern%20design&image_size=landscape_16_9"
    },
    {
      id: 5,
      name: "数据库原理与应用",
      description: "学习数据库的基本原理和应用，包括SQL语言、数据库设计、数据管理等。",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Database%20management%20system%2C%20SQL%20queries%2C%20modern%20design&image_size=landscape_16_9"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">郑润锋的个人页面</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">首页</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">课程</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">关于我</a>
          </div>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* 个人信息部分 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <span className="text-4xl font-bold text-blue-600">郑</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">郑润锋</h2>
              <p className="text-gray-600 mb-4">广东科学技术职业学院</p>
              <p className="text-gray-600">商学院 商务数据分析与应用专业</p>
            </div>
          </div>
        </div>
      </section>

      {/* 课程列表部分 */}
      <section id="courses" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">我的课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                  <p className="text-gray-600">{course.description}</p>
                  {course.name === "数据分析技术" ? (
                    <a href="/data-analysis" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      查看详情
                    </a>
                  ) : course.name === "数据采集与处理" ? (
                    <a href="/data-collection" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      查看详情
                    </a>
                  ) : course.name === "Python基础" ? (
                    <a href="/python-basic" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      查看详情
                    </a>
                  ) : (
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      查看详情
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 郑润锋的个人页面</p>
        </div>
      </footer>
    </div>
  );
}