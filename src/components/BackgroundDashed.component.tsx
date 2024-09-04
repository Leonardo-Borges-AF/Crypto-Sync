import { useRef } from "react";

export const BackgroundDashed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const dashedSpacing = "18px";
  const dashedWidth = "1px";
  const dashedHeight = "10px";

  return (
    <div
      ref={containerRef}
      className="absolute w-full h-full max-w-[1215px] grid grid-cols-4 top-0"
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      <div
        className={`h-full opacity-60 z-10 mr-auto relative`}
        style={{
          width: dashedWidth,
          background: `repeating-linear-gradient(to bottom, var(--color-border-dashed) 0, var(--color-border-dashed) ${dashedHeight}, transparent ${dashedHeight}, transparent ${dashedSpacing})`,
        }}
      ></div>
      <div
        className={`h-full opacity-60 z-10 mr-auto relative`}
        style={{
          width: dashedWidth,
          background: `repeating-linear-gradient(to bottom, var(--color-border-dashed) 0, var(--color-border-dashed) ${dashedHeight}, transparent ${dashedHeight}, transparent ${dashedSpacing})`,
        }}
      ></div>
      <div
        className={`h-full opacity-60 z-10 mr-auto`}
        style={{
          width: dashedWidth,
          left: "50%",
          transform: "translateX(-50%)",
          background: `repeating-linear-gradient(to bottom, var(--color-border-dashed) 0, var(--color-border-dashed) ${dashedHeight}, transparent ${dashedHeight}, transparent ${dashedSpacing})`,
        }}
      ></div>
      <div className="flex">
        <div
          className={`h-full opacity-60 z-10 mr-auto relative`}
          style={{
            width: dashedWidth,
            background: `repeating-linear-gradient(to bottom, var(--color-border-dashed) 0, var(--color-border-dashed) ${dashedHeight}, transparent ${dashedHeight}, transparent ${dashedSpacing})`,
          }}
        ></div>
        <div
          className={`h-full opacity-60 z-10 relative`}
          style={{
            width: dashedWidth,
            background: `repeating-linear-gradient(to bottom, var(--color-border-dashed) 0, var(--color-border-dashed) ${dashedHeight}, transparent ${dashedHeight}, transparent ${dashedSpacing})`,
          }}
        ></div>
      </div>
    </div>
  );
};
