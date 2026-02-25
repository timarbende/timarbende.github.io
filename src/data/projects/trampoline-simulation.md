---
title: "Trampolin simulation"
short_description: "Physical trampoline simulation based on a system of combined mass-springs and rigid bodies"
long_description: "A custom C++ physics engine designed to simulate the interaction between rigid projectiles and a deformable, grid-based trampoline. \n \n Unlike traditional high-density cloth simulations that often struggle with tunneling or instability, this approach utilizes a sparse mass-spring system integrated with discrete rectangular rigid-body panels. By filling each cell of the mass-spring grid with a physical collider, the system ensures consistent contact manifolds, allowing the trampoline to react to impacts more reliably. The core innovation lies in the conformal interaction between the trampoline’s individual panels and external objects. Each panel acts as both a component of the larger deformable surface and an independent collider, facilitating stable multi-body dynamics. This architecture was specifically developed to mitigate the common 'explosive' instabilities found in thin-shell simulations, providing a robust framework for handling high-velocity impacts and complex geometric intersections in real-time."
publish_date: 2024-04-20
github_link: "https://github.com/timarbende/trampoline-simulation"
order: 20
tech_stack:
    - "C++"
    - "D3D"
    - "DirectX"
---