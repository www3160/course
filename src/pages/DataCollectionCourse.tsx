export default function DataCollectionCourse() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">郑润锋的个人页面</h1>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">首页</a>
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">课程</a>
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">关于我</a>
          </div>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* 课程标题 */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">数据采集与处理</h1>
          <p className="text-center mt-4">高职大二第二学期</p>
        </div>
      </section>

      {/* 课程内容 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* 课程简介 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">课程简介</h2>
            <p className="text-gray-700">
              《数据采集与处理》是商务数据分析与应用专业的核心课程，旨在培养学生掌握数据采集的基本理论、方法和工具，
              能够运用数据采集技术获取和处理各种数据源的信息。本课程基于学生已有的Python基础，
              进一步提升学生的数据采集和处理能力。
            </p>
          </div>

          {/* 核心知识体系总结 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">核心知识体系总结</h2>
            <p className="text-gray-700 mb-6">
              本课程构建了一个从基础到高级、理论到实践的完整Python网络爬虫学习框架，主要涵盖以下四大模块：
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">模块</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">核心内容</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">关键技术/工具</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">1. 基础解析与数据提取</td>
                    <td className="py-3 px-4 border-b">HTML文档结构、DOM树、元素定位方法</td>
                    <td className="py-3 px-4 border-b">正则表达式、BeautifulSoup (find/find_all, CSS选择器)、XPath (lxml库)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">2. 核心爬虫开发</td>
                    <td className="py-3 px-4 border-b">请求发送、数据抓取、错误处理、数据存储</td>
                    <td className="py-3 px-4 border-b">Requests库、多线程/多进程、CSV/JSON文件操作、数据库存储</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">3. 高级框架与项目实战</td>
                    <td className="py-3 px-4 border-b">结构化、可扩展的大型爬虫项目开发</td>
                    <td className="py-3 px-4 border-b">Scrapy框架（引擎、调度器、爬虫、管道等组件）、Selenium（动态网页处理）</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">4. 专项技能与优化</td>
                    <td className="py-3 px-4 border-b">应对复杂网站、提升爬虫效率与健壮性</td>
                    <td className="py-3 px-4 border-b">爬取策略（深度/广度优先）、反爬策略（代理、延时、UA）、数据清洗与分析</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 关键技术要点归纳 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">关键技术要点归纳</h2>
            
            {/* 数据解析三剑客 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">数据解析"三剑客"：</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>正则表达式：适用于结构简单、文本模式固定的快速提取，但可读性较差。</li>
                <li>BeautifulSoup：基于Python风格，语法简洁，适合初学者，擅长处理复杂的HTML嵌套。</li>
                <li>XPath：基于路径表达式，功能强大精准，适合处理结构清晰的XML/HTML文档，是Scrapy框架的默认选择。</li>
              </ul>
            </div>

            {/* 两大核心爬虫框架 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">两大核心爬虫框架：</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Scrapy：工业级标准框架。采用异步处理，性能高，模块化设计（引擎、调度器、爬虫、管道、中间件等），适合大规模、结构化数据爬取。学习路径清晰：创建项目 -&gt; 定义目标 -&gt; 编写爬虫逻辑 -&gt; 处理与存储数据。</li>
                <li>Selenium：浏览器自动化工具。核心价值在于处理JavaScript动态渲染的页面。通过模拟真实用户操作（点击、输入、滚动）来获取渲染后的完整HTML，是应对反爬手段（如Ajax加载）的关键技术。</li>
              </ul>
            </div>

            {/* 项目驱动学习路径 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">项目驱动学习路径：</h3>
              <p className="text-gray-700 mb-2">参考资料通过一系列渐进式实战项目串联知识点：</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>入门级：爬取静态新闻列表（如学校要闻）、天气预报数据。</li>
                <li>进阶级：爬取商品信息、旅游网站数据等半结构化内容。</li>
                <li>高级/框架级：使用Scrapy爬取站酷网作品、新闻网站；使用Selenium完成自动登录、复杂交互页面数据采集。</li>
              </ul>
            </div>

            {/* 工程化与最佳实践 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">工程化与最佳实践：</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>爬取策略：针对网站结构（树状/网状）选择合适的算法（深度优先DFS、广度优先BFS），并注意处理循环链接和避免重复抓取。</li>
                <li>效率优化：引入多线程/多进程提升爬取速度；对于海量数据，考虑分布式爬虫策略。</li>
                <li>健壮性保障：必须加入异常处理（try...except）、请求延时（避免被封IP）、用户代理（UA）轮换、代理IP池等反爬措施。</li>
                <li>伦理与法律：始终遵守robots.txt协议，尊重网站版权和个人隐私，将爬虫用于合法学习与研究目的。</li>
              </ul>
            </div>
          </div>

          {/* 学习资源与定位 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">学习资源与定位</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>教材与课程：以《Python网络爬虫项目化教程（第2版）》及其习题、PPT为核心理论教材，配套《Python网络爬虫程序技术》教学大纲，形成完整的课程体系。</li>
              <li>练习平台：推荐了如豆瓣电影、专门爬虫练习靶场等适合不同阶段的练习网站，用于巩固技能。</li>
              <li>内容特点：资料强调"工学结合"与"项目实战"，不仅提供代码示例，更注重分析项目背景、设计思路、调试技巧和扩展方向，培养解决实际问题的能力。</li>
            </ul>
          </div>

          {/* 教学方法 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">教学方法</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>理论讲解：讲解数据采集的基本概念、方法和技术</li>
              <li>案例分析：通过实际案例分析，加深对数据采集技术的理解</li>
              <li>实践操作：使用Python进行数据采集实践，提升动手能力</li>
              <li>小组讨论：组织小组讨论，培养团队协作能力</li>
              <li>项目实战：完成一个完整的数据采集项目，综合运用所学知识</li>
            </ul>
          </div>

          {/* 评估方式 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">评估方式</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>平时作业：20%（包括课堂练习、课后作业）</li>
              <li>实验报告：30%（包括数据采集、处理和分析实验）</li>
              <li>项目实战：30%（完成一个完整的数据采集项目）</li>
              <li>期末考试：20%（理论知识和实践操作）</li>
            </ul>
          </div>

          {/* 参考资料 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">参考资料</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>《Python网络爬虫项目化教程（第2版）》</li>
              <li>《Python网络爬虫程序技术》教学大纲</li>
              <li>Requests库官方文档：https://docs.python-requests.org/</li>
              <li>BeautifulSoup官方文档：https://www.crummy.com/software/BeautifulSoup/</li>
              <li>Scrapy官方文档：https://docs.scrapy.org/</li>
              <li>Selenium官方文档：https://www.selenium.dev/documentation/</li>
              <li>Python官方文档：https://docs.python.org/3/</li>
            </ul>
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