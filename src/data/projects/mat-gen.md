---
title: "Room-Scale Image-Conditional PBR Material Generation"
image_source: "/res/images/matgen_thumbnail.png"
short_description: "A method that utilizes a pre-trained monocular generative intrinsic image estimator to distill Physically Based Rendering material textures for room scale scenes. Given the scene geometric mesh and a set of images spatially covering the environment, our model synthesizes albedo, roughness, metallic, normal and irradiance maps using score distillation"
long_description: "This is the project of my Master's Thesis, developed in the Visual Computing Chair of the Technical University of Munich. \n \n Recent developments in Score Distillation Sampling led to pipelines generating high-quality, visually plausible 3D assets for virtual environments with image and text conditioning. The primary limitation of these approaches is that they do not separate the material from the light, resulting in textures with baked-in lighting effects. In contrast, we proposed a method that utilizes a pre-trained monocular generative intrinsic image estimator to distill Physically Based Rendering material textures for room scale scenes. Given the scene geometric mesh and a set of images spatially covering the environment, our model synthesizes albedo, roughness, metallic, normal and irradiance maps using score distillation. Our method outperforms state-of-the-art optimization-based methods and provides clean material maps, which can subsequently be used in rendering engines for the purpose of relighting or material editing. \n \n All experiments were launched on a workstation equipped with a single NVIDIA GeForce RTX 3090 GPU with 24GB VRAM available, running CUDA Version 12.9. A floating-point precision of 32-bits was used, as 16-bit precision results in gradient explosion and oversaturated model outputs. Average runtime of generating a material map was found to be 4.5 hours with 17K training iterations."
trailer_url: "https://www.youtube.com/embed/JstnwpoNx34?si=i5NZdU5oETahD5bP"
publish_date: 2026-01-20
github_link: "https://github.com/timarbende/RoomScale-PBR-Material-Gen"
order: 100
tech_stack:
    - "Python"
    - "Pytorch"
    - "Pytorch3D"
    - "Diffusers"
    - "Blender"
---