---
title: "Calculating the Activity of a Single Atom Alloy Nanoparticle"
description: "Combining active site sampling and microkinetics to get nanoparticle activity"
pubDate: "Aug 17 2023"
heroImage: "/images/cluster.webp"
---

<div style="max-width:920px;margin:1.25rem auto;padding:1.25rem 1.5rem;line-height:1.6;color:#0f172a;font-size:1.02rem;background:linear-gradient(180deg,#ffffff,#fbfdff);border-radius:10px;box-shadow:0 8px 28px rgba(2,6,23,0.06);">

<p style="margin:0 0 0.5rem 0;">Single atom alloys are unique as the only catalytically active sites are single atoms.
This highly localized activity allows "simpler" kinetics due to the reactivity of the single atom being more
homogeneous-like than heterogeneous in nature. Removal of surface diffusion allows the total rate equation to be
simplified to the sum of probabilities of a dopant atom being in a surface site and the reactivity of that site.

With this, I sampled the active sites of the nanoparticle using a machine learning interatomic potential.
I then classified the sites using machine learning.
To get the reaction rates, I used density functional theory, along with microkinetic modeling within the mean field approximation.
This gave a total reaction rate for the whole nanoparticle catalyst.
</p>

  <figure style="margin:0 auto 1rem auto;max-width:820px;text-align:center;">
    <img src="/images/classification.jpeg" alt="Reaction Network" style="width:100%;height:auto;border-radius:8px;box-shadow:0 10px 30px rgba(2,6,23,0.08);border:1px solid rgba(15,23,42,0.04);" />
    <figcaption style="margin-top:0.6rem;font-style:italic;color:#64748b;font-size:0.95rem;">Classification of active sites from molecular dynamics trajectories using pairwise similarity kernels</figcaption>
  </figure>

</div>