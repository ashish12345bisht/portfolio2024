"use client";
import { Download } from "lucide-react";
import styles from "./style.module.scss";

const FloatingResume = () => {
  const handleResumeDownload = () => window.open("/resume.pdf", "_blank");
  return (
    <div onClick={handleResumeDownload} className={styles.floatingDownload}>
      <Download className="text-white" />
    </div>
  );
};

export default FloatingResume;
