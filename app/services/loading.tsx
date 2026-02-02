export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#040010]">
      <div className="relative flex flex-col items-center">
        {/* Animated gradient orbs in background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow bg-[#8133F1]/20 blur-[100px]" />
          <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slower bg-[#CEB0FA]/15 blur-[80px]" />
        </div>

        {/* Main spinner with gradient */}
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-4 border-transparent border-t-[#8133F1] border-r-[#CEB0FA]" />
          <div className="absolute inset-2 animate-spin-reverse rounded-full border-4 border-transparent border-b-[#8133F1]/40 border-l-[#CEB0FA]/40" />
          <div className="absolute inset-0 animate-ping-slow rounded-full bg-[#8133F1]/10" />
        </div>

        {/* Loading text */}
        <div className="mt-8 overflow-hidden">
          <p className="animate-fade-in text-sm font-semibold uppercase tracking-[0.32em] text-[#CEB0FA]">
            Loading
          </p>
        </div>

        {/* Animated dots */}
        <div className="mt-3 flex gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce-1 rounded-full bg-[#8133F1]" />
          <span className="h-1.5 w-1.5 animate-bounce-2 rounded-full bg-[#8133F1]" />
          <span className="h-1.5 w-1.5 animate-bounce-3 rounded-full bg-[#8133F1]" />
        </div>
      </div>
    </div>
  );
}
