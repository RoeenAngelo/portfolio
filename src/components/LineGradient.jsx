import { motion } from "framer-motion";

const LineGradient = ({ width = "w-full" }) => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>;
};

export default LineGradient;
