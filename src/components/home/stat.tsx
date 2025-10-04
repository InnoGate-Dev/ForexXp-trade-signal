"use client";

import { motion } from "framer-motion";
//import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface StatsProps {
  heading?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: number;
    suffix?: string;
    label: string;
  }>;
}

export function TradingStats({
  heading = "Platform performance insights",
  description = "Real-time analytics showing the accuracy and success of our trading signals.",
  // link = {
  //   text: "View detailed analytics",
  //   url: "#",
  // },
  stats = [
    { id: "s1", value: 92, suffix: "%", label: "Signal accuracy rate" },
    { id: "s2", value: 540, suffix: "+", label: "Active premium traders" },
    {
      id: "s3",
      value: 1.5,
      suffix: "M",
      label: "Monthly trading volume (USD)",
    },
    { id: "s4", value: 78, suffix: "%", label: "User profit consistency" },
  ],
}: StatsProps) {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const duration = 1500;
      const step = stat.value / (duration / 16);
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(newCounts[index] + step, stat.value);
          }
          return newCounts;
        });
      }, 16);
    });

    return () => intervals.forEach(clearInterval);
  }, [stats]);

  return (
    <section className=" text-black pt-34">
      <div className="container">
        <motion.div
          className="flex flex-col items-start gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl bg-black bg-clip-text text-transparent">
            {heading}
          </h2>
          <p className="text-gray-800 max-w-2xl">{description}</p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="text-5xl md:text-6xl font-extrabold text-black">
                {counts[i].toFixed(stat.value < 10 ? 1 : 0)}
                {stat.suffix}
              </div>
              <p className="mt-3 text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
