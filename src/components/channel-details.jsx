export const ChannelDetails = () => {
  return (
    <section className="grid grid-cols-4 gap mt-[18px] overflow-hidden rounded-lg border border-white/10 bg-white/10 max-[700px]:grid-cols-1" aria-label="Library metrics">
      <div className="bg-[#101219]/90 p-[18px]">
        <strong className="block text-[28px] text-white">1.03M</strong>
        <span className="block text-[#aeb2c0]">tiles staged</span>
      </div>
      <div className="bg-[#101219]/90 p-[18px]">
        <strong className="block text-[28px] text-white">1M</strong>
        <span className="block text-[#aeb2c0]">sample reach</span>
      </div>
      <div className="bg-[#101219]/90 p-[18px]">
        <strong className="block text-[28px] text-white">4</strong>
        <span className="block text-[#aeb2c0]">thumbnail ratios</span>
      </div>
      <div className="bg-[#101219]/90 p-[18px]">
        <strong className="block text-[28px] text-white">Live</strong>
        <span className="block text-[#aeb2c0]">URL parser</span>
      </div>
    </section>
  )
}