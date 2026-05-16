export function SiteBackground() {
  return (
    <div className="site-bg site-bg--enter pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="site-bg-base" />
      <div className="site-orb site-orb--navy site-orb--top site-orb--anim-a" />
      <div className="site-orb site-orb--gold site-orb--mid site-orb--anim-b" />
      <div className="site-orb site-orb--navy site-orb--low site-orb--anim-c" />
      <div className="site-orb site-orb--ice site-orb--anim-d" />
      <div className="site-beam site-beam--top site-beam--anim" />
      <div className="site-beam site-beam--mid site-beam--anim site-beam--anim-delay" />
      <div className="site-lines" />
      <div className="site-noise site-noise--anim" />
    </div>
  );
}
