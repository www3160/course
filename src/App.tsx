import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import DataAnalysisCourse from "@/pages/DataAnalysisCourse";
import DataCollectionCourse from "@/pages/DataCollectionCourse";
import PythonBasicCourse from "@/pages/PythonBasicCourse";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-analysis" element={<DataAnalysisCourse />} />
        <Route path="/data-collection" element={<DataCollectionCourse />} />
        <Route path="/python-basic" element={<PythonBasicCourse />} />
      </Routes>
    </Router>
  );
}
