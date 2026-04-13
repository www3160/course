export default function PythonBasicCourse() {
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
          <h1 className="text-4xl font-bold text-center">Python基础分析</h1>
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
              《Python基础分析》是商务数据分析与应用专业的基础课程，旨在培养学生掌握Python编程语言的基础知识和核心技能，
              为后续的数据分析、数据采集等课程打下坚实的基础。本课程采用渐进式学习方法，从环境搭建到高级特性，
              全面覆盖Python编程的核心内容。
            </p>
          </div>

          {/* 学习路径概览 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">学习路径概览</h2>
            <p className="text-gray-700 mb-6">
              整个知识体系遵循渐进式学习逻辑，从基础到核心，再到高级应用与方向拓展，确保学习连贯性。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800">基础入门</h3>
                <p className="text-gray-700">环境搭建 → 代码规范 → 变量与数据类型</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800">核心语法</h3>
                <p className="text-gray-700">运算符 → 流程控制（条件、循环）→ 函数 → 异常处理</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800">数据结构</h3>
                <p className="text-gray-700">序列（字符串、列表、元组）→ 集合 → 字典</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800">进阶编程</h3>
                <p className="text-gray-700">面向对象编程（OOP）→ 模块与包 → 文件操作</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
                <h3 className="text-xl font-bold mb-2 text-gray-800">高级特性与方向</h3>
                <p className="text-gray-700">装饰器、魔法函数、算法思维、Web开发、数据分析、AI等</p>
              </div>
            </div>
          </div>

          {/* 核心知识点归纳 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">核心知识点归纳</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">模块</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">核心概念</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">关键内容</th>
                    <th className="py-3 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">学习目标</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b" rowSpan={3}>1. 变量与基础</td>
                    <td className="py-3 px-4 border-b">变量定义与操作</td>
                    <td className="py-3 px-4 border-b">命名规则、动态类型、多变量赋值、重新赋值</td>
                    <td className="py-3 px-4 border-b">理解变量作为数据“容器”的概念，掌握赋值逻辑</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">基本数据类型</td>
                    <td className="py-3 px-4 border-b">int, float, str, bool 的表示与特点</td>
                    <td className="py-3 px-4 border-b">识别、创建各类型实例，使用 type() 查看类型</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">类型转换</td>
                    <td className="py-3 px-4 border-b">int(), float(), str(), bool() 函数的使用与注意事项</td>
                    <td className="py-3 px-4 border-b">实现数字与字符串互转，处理转换失败的情况</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b" rowSpan={2}>2. 流程控制</td>
                    <td className="py-3 px-4 border-b">条件语句</td>
                    <td className="py-3 px-4 border-b">if, elif, else 实现分支逻辑</td>
                    <td className="py-3 px-4 border-b">编写条件测试，处理列表中的特殊元素</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">循环语句</td>
                    <td className="py-3 px-4 border-b">for, while 循环，break, continue 控制流程</td>
                    <td className="py-3 px-4 border-b">遍历序列，处理重复操作，避免无限循环</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b" rowSpan={4}>3. 核心数据结构</td>
                    <td className="py-3 px-4 border-b">列表 (list)</td>
                    <td className="py-3 px-4 border-b">创建、访问（索引/切片）、修改、添加、删除、排序、列表推导式</td>
                    <td className="py-3 px-4 border-b">熟练操作列表，理解可变序列特性，编写高效代码</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">元组 (tuple)</td>
                    <td className="py-3 px-4 border-b">创建、访问、不可变性</td>
                    <td className="py-3 px-4 border-b">理解不可变序列的应用场景（如数据保护）</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">集合 (set)</td>
                    <td className="py-3 px-4 border-b">创建（自动去重）、无序性、唯一性、元素操作、集合运算（交并差）</td>
                    <td className="py-3 px-4 border-b">利用集合进行去重和关系运算</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">字典 (dict)</td>
                    <td className="py-3 px-4 border-b">键值对、访问、增删改、遍历、嵌套</td>
                    <td className="py-3 px-4 border-b">将相关信息关联起来，模拟更复杂的现实情形</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b" rowSpan={2}>4. 函数</td>
                    <td className="py-3 px-4 border-b">函数定义与调用</td>
                    <td className="py-3 px-4 border-b">参数传递（位置、关键字、默认值）、返回值、*args, **kwargs</td>
                    <td className="py-3 px-4 border-b">封装代码块，实现代码复用，编写模块化程序</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">高阶函数与Lambda</td>
                    <td className="py-3 px-4 border-b">map(), filter(), sorted() 与 lambda 表达式结合</td>
                    <td className="py-3 px-4 border-b">编写简洁的匿名函数，用于数据处理和排序</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b" rowSpan={3}>5. 面向对象编程</td>
                    <td className="py-3 px-4 border-b">类与对象</td>
                    <td className="py-3 px-4 border-b">类定义、__init__ 构造方法、属性、方法、self 参数</td>
                    <td className="py-3 px-4 border-b">用类抽象现实实体，创建对象实例</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">三大特性</td>
                    <td className="py-3 px-4 border-b">封装（数据与行为结合）、继承（super()调用父类）、多态</td>
                    <td className="py-3 px-4 border-b">构建可复用、易维护的代码结构，理解“蓝图与实物”关系</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">魔法函数</td>
                    <td className="py-3 px-4 border-b">__str__, __iter__, __getitem__ 等，用于自定义对象行为</td>
                    <td className="py-3 px-4 border-b">使自定义类的行为像内置类型一样自然</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b" rowSpan={2}>6. 文件与数据持久化</td>
                    <td className="py-3 px-4 border-b">文件操作</td>
                    <td className="py-3 px-4 border-b">open() 模式、读写方法、with 语句管理资源、路径处理</td>
                    <td className="py-3 px-4 border-b">读写文本/二进制文件，进行日志分析、数据管理</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">CSV处理</td>
                    <td className="py-3 px-4 border-b">csv 模块读写，pandas 库进行数据分析、清洗</td>
                    <td className="py-3 px-4 border-b">高效处理表格数据，完成数据导入导出任务</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b" rowSpan={3}>7. 高级特性与工具</td>
                    <td className="py-3 px-4 border-b">装饰器</td>
                    <td className="py-3 px-4 border-b">语法糖 @、闭包、functools.wraps、带参数装饰器</td>
                    <td className="py-3 px-4 border-b">不修改原代码为函数添加功能（如日志、计时、权限检查）</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">日期时间</td>
                    <td className="py-3 px-4 border-b">datetime, date, time, timedelta 模块</td>
                    <td className="py-3 px-4 border-b">处理时间计算、格式化、时区转换</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">算法思维</td>
                    <td className="py-3 px-4 border-b">遍历、分治（如二分查找）、递归、逆推等思维模式</td>
                    <td className="py-3 px-4 border-b">从语法使用者转变为能分析、解决问题的程序员</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 进阶学习方向 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">进阶学习方向</h2>
            <p className="text-gray-700 mb-4">掌握核心后，可选择以下方向深入：</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Web开发</h3>
                <p className="text-gray-700">Django（全功能）、Flask（轻量级）框架。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800">数据分析与可视化</h3>
                <p className="text-gray-700">Pandas、NumPy、Matplotlib、Seaborn 库。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800">人工智能与机器学习</h3>
                <p className="text-gray-700">Scikit-learn、TensorFlow、PyTorch 框架。</p>
              </div>
            </div>
          </div>

          {/* 关键学习建议与思维 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">关键学习建议与思维</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-4">
              <li>
                <strong>实践至上：</strong>通过项目（如“猜数字AI游戏”、“图书馆管理系统”）巩固知识。
              </li>
              <li>
                <strong>伪代码先行：</strong>在编码前用伪代码梳理逻辑，培养编程思维。
              </li>
              <li>
                <strong>遵循最佳实践：</strong>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2">
                  <li>使用 with 语句管理文件资源。</li>
                  <li>为装饰器使用 @functools.wraps。</li>
                  <li>编写可读性高的代码，添加必要注释。</li>
                </ul>
              </li>
              <li>
                <strong>利用优质资源：</strong>官方文档、经典书籍、在线课程、实战平台。
              </li>
            </ul>
          </div>

          {/* 教学方法 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">教学方法</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>理论讲解：讲解Python的基本概念、语法和编程思想</li>
              <li>案例分析：通过实际案例分析，加深对Python编程的理解</li>
              <li>实践操作：使用Python进行编程实践，提升动手能力</li>
              <li>小组讨论：组织小组讨论，培养团队协作能力</li>
              <li>项目实战：完成一个完整的Python项目，综合运用所学知识</li>
            </ul>
          </div>

          {/* 评估方式 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">评估方式</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>平时作业：20%（包括课堂练习、课后作业）</li>
              <li>实验报告：30%（包括编程实验、数据分析实验）</li>
              <li>项目实战：30%（完成一个完整的Python项目）</li>
              <li>期末考试：20%（理论知识和实践操作）</li>
            </ul>
          </div>

          {/* 参考资料 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">参考资料</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>《Python编程：从入门到实践》，Eric Matthes，人民邮电出版社</li>
              <li>《Python核心编程》，Wesley J. Chun，机械工业出版社</li>
              <li>《流畅的Python》，Luciano Ramalho，人民邮电出版社</li>
              <li>Python官方文档：https://docs.python.org/3/</li>
              <li>NumPy官方文档：https://numpy.org/doc/</li>
              <li>Pandas官方文档：https://pandas.pydata.org/docs/</li>
              <li>Django官方文档：https://docs.djangoproject.com/</li>
              <li>Flask官方文档：https://flask.palletsprojects.com/</li>
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