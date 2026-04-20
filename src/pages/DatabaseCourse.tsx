export default function DatabaseCourse() {
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
          <h1 className="text-4xl font-bold text-center">数据库原理与应用</h1>
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
              《数据库原理与应用》是商务数据分析与应用专业的核心课程，旨在培养学生掌握数据库的基本原理、SQL语言和数据分析技能，
              能够运用数据库思维管理数据，用SQL语言高效取数，用设计范式保障数据质量。本课程从分析师视角出发，
              重点培养学生的SQL查询能力和数据分析能力。
            </p>
          </div>

          {/* 课程定位 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">课程定位：分析师视角的数据库学习</h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">核心目标</h3>
              <p className="text-gray-700">掌握数据库思维，熟练使用SQL进行数据提取与预处理，理解数据结构对分析质量的影响。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800">学习重点</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>SQL查询（聚合、多表连接、窗口函数）</li>
                  <li>数据过滤与分组</li>
                  <li>完整性约束与范式基础</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800">了解内容</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>索引优化</li>
                  <li>存储过程</li>
                  <li>物理设计</li>
                </ul>
                <p className="text-gray-700 mt-2">以应用为主，不深入开发细节</p>
              </div>
            </div>
          </div>

          {/* 基础原理 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">基础原理：数据如何组织</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">概念</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">说明</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">分析视角意义</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">关系模型</td>
                    <td className="py-3 px-4 border-b">数据以二维表（行+列）存储</td>
                    <td className="py-3 px-4 border-b">理解每张表的业务含义</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">实体完整性</td>
                    <td className="py-3 px-4 border-b">主键唯一且非空</td>
                    <td className="py-3 px-4 border-b">保证每条记录可被唯一识别</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">参照完整性</td>
                    <td className="py-3 px-4 border-b">外键引用已有主键</td>
                    <td className="py-3 px-4 border-b">保证表间数据一致性</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">用户定义完整性</td>
                    <td className="py-3 px-4 border-b">业务规则约束（如年龄≥0）</td>
                    <td className="py-3 px-4 border-b">避免脏数据进入分析</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">范式（1NF/2NF/3NF）</td>
                    <td className="py-3 px-4 border-b">减少数据冗余的设计规则</td>
                    <td className="py-3 px-4 border-b">提高数据质量，但复杂查询可能需要反范式化</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>分析师需要知道：</strong>数据表越符合3NF，一致性越好，但查询可能越复杂。
            </p>
          </div>

          {/* SQL核心 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">SQL核心（占实际工作80%）</h2>
            
            {/* 基本查询结构 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">1. 基本查询结构（必会）</h3>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
                <pre>
{`SELECT 列名, 聚合函数
FROM 表名
WHERE 条件
GROUP BY 列名
HAVING 条件
ORDER BY 列名
LIMIT n;`}
                </pre>
              </div>
            </div>

            {/* 重点操作类型 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">2. 重点操作类型</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">类型</th>
                      <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">关键词</th>
                      <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">典型分析场景</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b">聚合统计</td>
                      <td className="py-3 px-4 border-b">COUNT, SUM, AVG, MAX, MIN</td>
                      <td className="py-3 px-4 border-b">销售额、用户数、平均客单价</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">分组过滤</td>
                      <td className="py-3 px-4 border-b">GROUP BY + HAVING</td>
                      <td className="py-3 px-4 border-b">按月统计，筛选高销售额月份</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">多表连接</td>
                      <td className="py-3 px-4 border-b">INNER JOIN, LEFT JOIN</td>
                      <td className="py-3 px-4 border-b">用户与订单关联、留存分析</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">条件逻辑</td>
                      <td className="py-3 px-4 border-b">CASE WHEN</td>
                      <td className="py-3 px-4 border-b">用户分层、漏斗转化</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">窗口函数</td>
                      <td className="py-3 px-4 border-b">ROW_NUMBER, LAG, SUM OVER</td>
                      <td className="py-3 px-4 border-b">排名、环比、累计消费</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 建议掌握顺序 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">3. 建议掌握顺序</h3>
              <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                <li><strong>基础查询：</strong>SELECT/FROM/WHERE/GROUP BY</li>
                <li><strong>连接与条件：</strong>LEFT JOIN + CASE WHEN</li>
                <li><strong>进阶分析：</strong>窗口函数 + CTE（公用表表达式）</li>
              </ol>
            </div>
          </div>

          {/* 商务分析典型应用场景 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">商务分析典型应用场景</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">场景</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">所用技术</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">分析目标</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">RFM客户价值分析</td>
                    <td className="py-3 px-4 border-b">ROW_NUMBER + SUM + GROUP BY</td>
                    <td className="py-3 px-4 border-b">识别高价值/流失客户</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">留存分析</td>
                    <td className="py-3 px-4 border-b">自连接 + 日期函数</td>
                    <td className="py-3 px-4 border-b">计算新用户的次日/7日/30日留存</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">漏斗转化分析</td>
                    <td className="py-3 px-4 border-b">CASE WHEN + SUM</td>
                    <td className="py-3 px-4 border-b">浏览→加购→支付转化率</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">数据清洗</td>
                    <td className="py-3 px-4 border-b">COALESCE + 去重窗口函数</td>
                    <td className="py-3 px-4 border-b">处理NULL、重复值、异常值</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 其他需要了解的概念 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">其他需要了解的概念</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><strong>索引：</strong>提高查询速度，但无需手动创建，需知道无索引会导致全表扫描。</li>
              <li><strong>视图：</strong>存储的查询结果，可简化日常取数操作。</li>
              <li><strong>事务（ACID）：</strong>数据分析通常只读，了解COMMIT和ROLLBACK即可。</li>
            </ul>
          </div>

          {/* 学习资源推荐 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">学习资源推荐</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">平台</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">适合内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">SQLZoo</td>
                    <td className="py-3 px-4 border-b">基础语法练习</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">LeetCode（数据库）</td>
                    <td className="py-3 px-4 border-b">中等难度面试题</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">牛客网 SQL 实战</td>
                    <td className="py-3 px-4 border-b">业务场景题目</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 总结 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">总结：本课程核心一句话</h2>
            <p className="text-gray-700">
              用 JOIN 和 GROUP BY 完成80%的取数任务，用窗口函数解决20%的复杂分析，用范式思维理解数据表结构设计。
            </p>
            <p className="text-gray-700 mt-4">
              <strong>学习建议：</strong>多问自己 "这个查询结果能支持什么商务决策？" ，而不是仅仅关注SQL是否能运行。
            </p>
          </div>

          {/* 教学方法 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">教学方法</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>理论讲解：讲解数据库的基本概念、SQL语法和数据分析方法</li>
              <li>案例分析：通过实际业务案例分析，加深对SQL应用的理解</li>
              <li>实践操作：使用数据库管理系统进行实践，提升动手能力</li>
              <li>小组讨论：组织小组讨论，培养团队协作能力</li>
              <li>项目实战：完成一个完整的数据库应用项目，综合运用所学知识</li>
            </ul>
          </div>

          {/* 评估方式 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">评估方式</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>平时作业：20%（包括课堂练习、课后作业）</li>
              <li>实验报告：30%（包括SQL实验、数据库设计实验）</li>
              <li>项目实战：30%（完成一个完整的数据库应用项目）</li>
              <li>期末考试：20%（理论知识和实践操作）</li>
            </ul>
          </div>

          {/* 参考资料 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">参考资料</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>《数据库系统概论》，王珊，高等教育出版社</li>
              <li>《SQL必知必会》，Alan Beaulieu，人民邮电出版社</li>
              <li>《SQL实战》，Alan Beaulieu，人民邮电出版社</li>
              <li>《数据库原理与应用》，李建中，高等教育出版社</li>
              <li>SQLZoo：https://sqlzoo.net/</li>
              <li>LeetCode数据库板块：https://leetcode-cn.com/problemset/database/</li>
              <li>牛客网SQL实战：https://www.nowcoder.com/activity/oj</li>
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