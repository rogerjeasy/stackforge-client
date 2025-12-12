"use client";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
      {/* Animated Gradient Orbs */}
      <div
        className="absolute -top-64 -left-64 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)",
          animationDelay: "0s",
        }}
      />
      
      <div
        className="absolute -bottom-52 -right-52 w-[400px] h-[400px] rounded-full opacity-30 blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle, #F7931E 0%, transparent 70%)",
          animationDelay: "5s",
        }}
      />
      
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full opacity-20 blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          animationDelay: "10s",
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(#E4E4E7 1px, transparent 1px),
            linear-gradient(90deg, #E4E4E7 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}