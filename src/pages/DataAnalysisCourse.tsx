export default function DataAnalysisCourse() {
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
          <h1 className="text-4xl font-bold text-center">数据分析技术</h1>
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
              《数据分析技术》是商务数据分析与应用专业的核心课程，旨在培养学生掌握数据分析的基本理论、方法和工具，
              能够运用数据分析技术解决实际商务问题。本课程基于学生已有的Python基础、数据采集与处理、商务数据分析与应用等课程知识，
              进一步提升学生的数据分析能力和实践技能。
            </p>
          </div>

          {/* 课程目标 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">课程目标</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>掌握数据分析的基本概念、流程和方法</li>
              <li>熟练运用Python进行数据清洗、预处理和分析</li>
              <li>掌握数据可视化技术，能够制作有效的数据可视化图表</li>
              <li>了解预测分析和机器学习的基本原理和应用</li>
              <li>能够运用数据分析技术解决实际商务问题</li>
              <li>培养数据思维和分析能力，提升商务决策水平</li>
            </ul>
          </div>

          {/* 课程内容 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">课程内容</h2>
            
            {/* 模块1 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">模块1：数据分析基础</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>数据分析的概念和重要性</li>
                <li>数据分析的基本流程</li>
                <li>数据分析的常用方法和技术</li>
                <li>数据分析工具介绍</li>
              </ul>
            </div>

            {/* 模块2 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">模块2：数据清洗与预处理</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>数据质量评估</li>
                <li>缺失值处理</li>
                <li>异常值检测与处理</li>
                <li>数据标准化和归一化</li>
                <li>特征工程基础</li>
              </ul>
            </div>

            {/* 模块3 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">模块3：描述性统计分析</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>基本统计量计算</li>
                <li>数据分布分析</li>
                <li>相关性分析</li>
                <li>假设检验基础</li>
              </ul>
            </div>

            {/* 模块4 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">模块4：数据可视化</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>数据可视化原则</li>
                <li>Matplotlib库使用</li>
                <li>Seaborn库使用</li>
                <li>交互式可视化工具</li>
                <li>仪表盘设计</li>
              </ul>
            </div>

            {/* 模块5 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">模块5：预测分析</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>时间序列分析基础</li>
                <li>回归分析</li>
                <li>预测模型评估</li>
                <li>预测模型应用</li>
              </ul>
            </div>

            {/* 模块6 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">模块6：机器学习基础</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>机器学习基本概念</li>
                <li>监督学习与无监督学习</li>
                <li>常用机器学习算法</li>
                <li>模型训练与评估</li>
                <li>机器学习应用案例</li>
              </ul>
            </div>

            {/* 模块7 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">模块7：数据分析实战</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>电商数据分析</li>
                <li>社交媒体数据分析</li>
                <li>金融数据分析</li>
                <li>供应链数据分析</li>
                <li>数据分析报告撰写</li>
              </ul>
            </div>
          </div>

          {/* 教学方法 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">教学方法</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>理论讲解：讲解数据分析的基本概念、方法和技术</li>
              <li>案例分析：通过实际案例分析，加深对数据分析技术的理解</li>
              <li>实践操作：使用Python进行数据分析实践，提升动手能力</li>
              <li>小组讨论：组织小组讨论，培养团队协作能力</li>
              <li>项目实战：完成一个完整的数据分析项目，综合运用所学知识</li>
            </ul>
          </div>

          {/* 评估方式 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">评估方式</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>平时作业：20%（包括课堂练习、课后作业）</li>
              <li>实验报告：30%（包括数据清洗、分析和可视化实验）</li>
              <li>项目实战：30%（完成一个完整的数据分析项目）</li>
              <li>期末考试：20%（理论知识和实践操作）</li>
            </ul>
          </div>

          {/* 参考资料 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">参考资料</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>《Python数据分析》，Wes McKinney，机械工业出版社</li>
              <li>《数据分析实战》，Ted Kwartler，人民邮电出版社</li>
              <li>《数据可视化实战》，Nathan Yau，人民邮电出版社</li>
              <li>《机器学习实战》，Peter Harrington，人民邮电出版社</li>
              <li>《商务数据分析》，刘满凤，清华大学出版社</li>
              <li>Python官方文档：https://docs.python.org/3/</li>
              <li>NumPy官方文档：https://numpy.org/doc/</li>
              <li>Pandas官方文档：https://pandas.pydata.org/docs/</li>
              <li>Matplotlib官方文档：https://matplotlib.org/stable/</li>
              <li>Seaborn官方文档：https://seaborn.pydata.org/</li>
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