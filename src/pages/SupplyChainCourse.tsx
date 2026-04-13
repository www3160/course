export default function SupplyChainCourse() {
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
          <h1 className="text-4xl font-bold text-center">供应链管理</h1>
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
              《供应链管理》是商务数据分析与应用专业的核心课程，旨在培养学生掌握供应链管理的基本理论、方法和工具，
              能够运用供应链管理技术优化企业运营流程，提高企业竞争力。本课程涵盖供应链管理的核心框架、关键管理领域、
              供应链金融、信息技术应用以及行业实践案例等内容。
            </p>
          </div>

          {/* 供应链管理核心框架 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">供应链管理核心框架</h2>
            <p className="text-gray-700 mb-6">
              供应链管理是一种集成的管理思想，旨在通过协调从供应商到最终用户的各个环节，实现物流、信息流、资金流的高效统一，以提升整体竞争力和客户满意度。
            </p>
            
            {/* 核心目标 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">1. 核心目标</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li><strong>降本增效：</strong>降低总运营成本、减少库存积压、加速资金周转。</li>
                <li><strong>快速响应：</strong>提高对市场需求的反应速度与灵活性。</li>
                <li><strong>提升服务：</strong>保证产品质量，提高准时交货率与客户满意度。</li>
              </ul>
            </div>

            {/* 主要策略 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">2. 主要策略</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li><strong>有效性供应链：</strong>侧重于成本效率，适合需求稳定的功能性产品。</li>
                <li><strong>反应性供应链：</strong>侧重于快速响应，适合需求多变的创新性产品。</li>
                <li><strong>混合策略：</strong>结合精益供应链（消除浪费）与敏捷供应链（快速响应），以应对不同产品与市场需求。</li>
              </ul>
            </div>
          </div>

          {/* 供应链关键管理领域 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">供应链关键管理领域</h2>
            <p className="text-gray-700 mb-6">
              知识库资料详细覆盖了供应链的各个核心环节：
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">管理领域</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">核心内容与目标</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">关键方法与工具</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">战略与设计</td>
                    <td className="py-3 px-4 border-b">制定供应链战略，设计网络结构（设施选址、资源配置）。</td>
                    <td className="py-3 px-4 border-b">基于产品的设计策略、SCOR模型、推/拉分析、延迟策略。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">合作伙伴关系</td>
                    <td className="py-3 px-4 border-b">建立长期、紧密的战略联盟，实现信息共享、风险共担。</td>
                    <td className="py-3 px-4 border-b">供应商选择与评价体系（如层次分析法）、绩效监控（六面板图）、VMI（供应商管理库存）、联合库存管理。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">采购管理</td>
                    <td className="py-3 px-4 border-b">从传统采购转向战略采购，优化供应商体系。</td>
                    <td className="py-3 px-4 border-b">JIT（准时制）采购、集中采购、供应商绩效考核、成本分析。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">库存管理</td>
                    <td className="py-3 px-4 border-b">平衡服务水平与库存成本，应对不确定性。</td>
                    <td className="py-3 px-4 border-b">库存控制模型（EOQ）、VMI、联合库存管理、多级库存优化。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">运输与配送</td>
                    <td className="py-3 px-4 border-b">优化物流网络，实现高效、低成本的货物流动。</td>
                    <td className="py-3 px-4 border-b">运输方式选择（公路、铁路、航空等）、配送模式（自营、共同、第三方）、路径优化。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">信息管理</td>
                    <td className="py-3 px-4 border-b">确保信息在供应链中准确、及时地传递与共享。</td>
                    <td className="py-3 px-4 border-b">供应链信息系统（如ERP）、信息共享平台、物联网、大数据分析。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">风险管理</td>
                    <td className="py-3 px-4 border-b">识别、评估、应对供应链内外部风险。</td>
                    <td className="py-3 px-4 border-b">风险识别工具（因果图、帕累托分析）、风险控制策略（多源供应、增加安全库存）。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">绩效评价</td>
                    <td className="py-3 px-4 border-b">衡量和优化供应链整体表现。</td>
                    <td className="py-3 px-4 border-b">关键绩效指标（KPI），如库存周转率、准时交货率、产销率、总运营成本等。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 供应链金融 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">供应链金融</h2>
            <p className="text-gray-700 mb-6">
              这是解决中小企业融资难题、优化供应链资金流的核心创新。
            </p>
            
            {/* 主要模式 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">1. 主要模式</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li><strong>应收账款融资：</strong>以未收回的货款为质押进行融资。</li>
                <li><strong>预付账款融资：</strong>以未来货权为质押，解决采购阶段的资金缺口（如保兑仓）。</li>
                <li><strong>存货质押融资：</strong>以在库货物为质押进行融资（如融通仓）。</li>
              </ul>
            </div>

            {/* 运作核心 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">2. 运作核心</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li><strong>"1+N"模式：</strong>以核心企业的信用为依托，为其上下游众多的中小企业（"N"）提供融资服务。</li>
                <li><strong>参与方：</strong>银行、核心企业、上下游中小企业、物流企业（监管）、担保机构等。</li>
                <li><strong>发展趋势：</strong>与金融科技（大数据、区块链、物联网）结合，向线上化、平台化、智慧化发展。</li>
              </ul>
            </div>
          </div>

          {/* 信息技术与系统支撑 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">信息技术与系统支撑</h2>
            <p className="text-gray-700 mb-6">
              信息系统是实现供应链高效协同的基础。
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><strong>ERP系统集成：</strong>如用友U8、金蝶K/3，实现采购、销售、库存、财务一体化管理。</li>
              <li><strong>协同平台：</strong>如致远互联C2+，实现与ERP系统的单据协同审批与移动办公。</li>
              <li><strong>新技术应用：</strong>大数据用于需求预测与决策；物联网用于货物追踪；人工智能与认知计算用于智能规划与异常管理。</li>
            </ul>
          </div>

          {/* 行业实践与案例分析 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">行业实践与案例分析</h2>
            <p className="text-gray-700 mb-6">
              知识库包含了大量跨行业的实践，揭示了供应链管理的具体应用：
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">行业/公司</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">实践亮点</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">参考文档</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">戴尔</td>
                    <td className="py-3 px-4 border-b">零库存、直销模式、高度信息协同。</td>
                    <td className="py-3 px-4 border-b">《03戴尔公司供应链管理案例分析》</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">ZARA/快时尚</td>
                    <td className="py-3 px-4 border-b">快速反应、小批量、多款式、敏捷供应链。</td>
                    <td className="py-3 px-4 border-b">《案例1：Zara的极速供应链》《冯氏：中国服装市场...》</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">苹果</td>
                    <td className="py-3 px-4 border-b">极简设计、构建强管控的全球供应链生态系统。</td>
                    <td className="py-3 px-4 border-b">《02苹果供应链管理》</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">京东</td>
                    <td className="py-3 px-4 border-b">依托电商平台与物流网络，发展"京保贝"等供应链金融。</td>
                    <td className="py-3 px-4 border-b">《京东供应链金融模式研究》</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">沃尔玛</td>
                    <td className="py-3 px-4 border-b">高效物流配送系统、直接供应商管理、先进信息技术。</td>
                    <td className="py-3 px-4 border-b">《12供应链管理-沃尔玛的核心竞争力》</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">生鲜/农产品</td>
                    <td className="py-3 px-4 border-b">解决高损耗、冷链物流痛点，发展B2B供应链平台。</td>
                    <td className="py-3 px-4 border-b">《予果君-社区生鲜供应链商业计划书》《九曳供应链商业计划书》</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 未来发展趋势 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">未来发展趋势</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><strong>数字化与智能化：</strong>构建数字供应链网络，利用AI、大数据实现预测性分析和自动化决策。</li>
              <li><strong>平台化与生态化：</strong>供应链服务向综合平台演进，整合物流、商流、资金流、信息流，构建产业生态圈。</li>
              <li><strong>柔性化与韧性化：</strong>供应链需具备更强的灵活性以应对市场波动，并通过多元化策略增强抗风险能力。</li>
              <li><strong>绿色与可持续：</strong>关注环保，发展绿色物流与循环供应链。</li>
            </ul>
          </div>

          {/* 总结 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">总结</h2>
            <p className="text-gray-700">
              您知识库中的资料全面构建了从基础理论、核心流程管理（采购、库存、物流），到创新应用（供应链金融），再到系统支撑（IT） 和行业实践的完整知识体系。企业可据此评估自身供应链水平，并沿着流程标准化 -&gt; 战略协同 -&gt; 金融赋能 -&gt; 数字智能化的路径持续优化。
            </p>
          </div>

          {/* 教学方法 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">教学方法</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>理论讲解：讲解供应链管理的基本概念、方法和技术</li>
              <li>案例分析：通过实际案例分析，加深对供应链管理的理解</li>
              <li>实践操作：使用供应链管理软件进行实践，提升动手能力</li>
              <li>小组讨论：组织小组讨论，培养团队协作能力</li>
              <li>项目实战：完成一个完整的供应链管理项目，综合运用所学知识</li>
            </ul>
          </div>

          {/* 评估方式 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">评估方式</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>平时作业：20%（包括课堂练习、课后作业）</li>
              <li>实验报告：30%（包括供应链管理实验、案例分析）</li>
              <li>项目实战：30%（完成一个完整的供应链管理项目）</li>
              <li>期末考试：20%（理论知识和实践操作）</li>
            </ul>
          </div>

          {/* 参考资料 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">参考资料</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>《供应链管理》，马士华，机械工业出版社</li>
              <li>《供应链管理：战略、规划与运营》，苏尼尔·乔普拉，中国人民大学出版社</li>
              <li>《物流与供应链管理》，马丁·克里斯托弗，电子工业出版社</li>
              <li>《供应链金融》，熊熊，机械工业出版社</li>
              <li>《03戴尔公司供应链管理案例分析》</li>
              <li>《案例1：Zara的极速供应链》</li>
              <li>《02苹果供应链管理》</li>
              <li>《京东供应链金融模式研究》</li>
              <li>《12供应链管理-沃尔玛的核心竞争力》</li>
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