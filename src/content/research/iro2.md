---
title: "Reactivity of IrO<sub>2</sub> undergoing dissolution"
description: "Coupling surface degradation and chemical activity with developed graph kinetic Monte Carlo"
pubDate: "Aug 14 2023"
heroImage: "/images/iro2surf.png"
---

<div style="max-width:920px;margin:1.25rem auto;padding:1.25rem 1.5rem;line-height:1.6;font-size:1.02rem;border-radius:10px;box-shadow:0 8px 28px rgba(2,6,23,0.06);">

  <div style="padding:0 0 0.75rem 0;border-bottom:1px solid rgba(15,23,42,0.04);margin-bottom:0.9rem;">
    <p style="margin:0 0 0.5rem 0;">Catalysts are dynamic systems; if the rate of reaction changes, the catalyst changes. 
Despite this, models are often built assuming that the catalyst is static. This is most notable in electrocatalysis, 
where degradation and dissolution of the catalyst under potential is an expected occurence. Here, I employ a graph 
kinetic Monte Carlo method to model the reaction of OER on IrO<sub>2</sub> while undergoing dissolution.</p>

  <figure style="margin:0 auto 1rem auto;max-width:820px;text-align:center;">
    <video controls playsinline muted loop style="width:100%;height:auto;border-radius:8px;box-shadow:0 10px 30px rgba(2,6,23,0.08);border:1px solid rgba(15,23,42,0.04);">
      <source src="/videos/dissolution.webm" type="video/webm">
      Your browser does not support the video tag.
    </video>
    <figcaption style="margin-top:0.5rem;font-size:0.95rem;">Surface degradation of IrO<sub>2</sub> under reaction conditions</figcaption>
  </figure>

  <p style="margin:0 0 0.5rem 0;">Traditional kinetic Monte Carlo assumed fixed lattice points and processes. With my 
method, that I call graph kinetic Monte Carlo, I can model a changing lattice by doing neighborhood analysis every time 
a new reaction occurs. With kinetic parameters generated for each possible surface state using DFT, along with the free 
energies of dissolution, both the reactivity and the degradation are coupled together. My method could be applied to 
other processes, such as oxidation/rusting, surface restructuring, and out-of-equilibrium reactions.</p>
  </div>

</div>
