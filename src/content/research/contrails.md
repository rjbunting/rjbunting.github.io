---
title: "Natural Phenomena at Scale"
description: "Contrails from first principles"
pubDate: "Aug 15 2023"
heroImage: "/solidliquid.png"
---

<p>Most reactions take place in a solvent - the biggest example is your own body, where life-dependent chemical reactions take place at active sites of enzymes within an aqueous environment.
Solvent effects have a crucial role on chemical reactions, dictating reactivity and selectivity by orders of magnitude.
These effects are of particular importance within catalysis, especially for the aqueous phase.
Water can deactivate oxide surfaces by forming inactive surface hydroxyl sites.
It can also allow proton transfer within solution, dictating hydrogen abstraction, HER, and OER.
In these scenarios, solvation is crucial for accurate molecular modelling of the system.
</p>
<p>Two main methods are available for modelling solvent, namely implicit and explicit modelling.
Implicit modelling considers a uniform effect upon a molecular system, where a sort of potential is applied to the system.
The most widely used example of this is the polarizable continuum model.
Explicit modelling involves each solvent molecule being modelled on an atomic scale.
Both methods have their benefits, where generally speaking an implicit model is much faster (due to computational cost) and simpler, whilst an explicit model is much closer to the true physical system, allowing consideration of direct coordination effects and hydrogen bonding networks.
I have used both methods within my research, selecting either or dependent on the insight and the significance of the effect required.</p>
<p>I hope to further my research in the area for hydrogen transfer and surface intermediate stabilisation.
I also desire to combine neural network potentials in a transferable QM/MM scheme to accelerate explicit solvation calculations at higher levels of theory, where the solvation is in an ideal world performed with a potential close to the true <em>ab initio</em> potential.</p>