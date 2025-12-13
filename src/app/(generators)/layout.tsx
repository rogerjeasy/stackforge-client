import BackgroundAnimation from "@/components/common/BackgroundAnimation";

export default function GeneratorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      {/* Background Animation */}
      <BackgroundAnimation />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}