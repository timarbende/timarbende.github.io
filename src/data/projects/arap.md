---
title: "Interactive ARAP"
image_source: "/res/images/arap_thumbnail.png"
short_description: "A C++ re-implementation of the As-Rigid-As-Possible mesh deformation technique from Sorkine et al. The aim is to preserve local geometry of the mesh by minimizing the deviations of individual cells from rigid body transformations. Included is a report detailing related work, the methods used for the algorithm, our results, conclusion and possible future work"
long_description: "A complete C++ re-implementation of the As-Rigid-As-Possible (ARAP) mesh deformation method first introduced by Sorkine et al. \n \n The goal of ARAP deformation is to maintain a surface's local geometric structure while allowing for simple, constraint-based manipulation by minimizing local changes from rigid body transformations on each mesh cell. In contrast, naive vertex transformations often lead to shearing or unnatural distortions. As a result, even with strong positional constraints, these deformations keep surface details and structural coherence intact. \n \n The implementation uses an alternating local and global scheme to build and solve the underlying nonlinear optimization problem. The global step updates vertex positions under positional constraints by solving a sparse linear system. Meanwhile, the local step estimates the best rotations for each cell. Particular attention was paid to solver performance, efficient sparse matrix assembly, and numerical stability. \n \n The project provides an interactive playground to try the deformation out in real time. In addition to the this, the project includes a comprehensive technical report covering related geometry processing work, the mathematical foundations of ARAP energy minimization, implementation details, experimental results, and a discussion of limitations and potential future extensions."
publish_date: 2023-05-11
github_link: "https://github.com/timarbende/arap"
order: 50
tech_stack:
    - "C++"
    - "OpenGL"
    - "CMake"
    - "OpenMP"
---