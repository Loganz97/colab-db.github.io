export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:{"charmm-gui_openmm":{_path:"\u002Fnotebooks\u002Fcharmm-gui_openmm",_dir:"notebooks",_draft:h,_partial:h,_locale:"en",_empty:h,title:"CHARMM-GUI+OpenMM",description:"Using inputs from CHARMM-GUI solution builder and MD simulations with OpenMM",excerpt:{type:i,children:[{type:b,tag:c,props:{},children:[{type:a,value:j}]},{type:b,tag:c,props:{},children:[{type:a,value:k},{type:b,tag:d,props:{href:e,rel:[f]},children:[{type:a,value:e}]},{type:a,value:l},{type:b,tag:d,props:{href:g,rel:[f]},children:[{type:a,value:g}]},{type:a,value:m}]}]},url:"https:\u002F\u002Fcolab.research.google.com\u002Fgithub\u002Fpablo-arantes\u002Fmaking-it-rain\u002Fblob\u002Fmain\u002FCHARMM_GUI.ipynb",git:"pablo-arantes\u002Fmaking-it-rain",added:"2023-02-27",type:["colab"],image:"https:\u002F\u002Fraw.githubusercontent.com\u002Fpablo-arantes\u002Fmaking-it-rain\u002Fmain\u002FGraphAbs.png",category:"biology",license:"mit",tags:["proteins","Bio",n],used_software:["openmm","py3Dmol"],creator:[{name:"Pablo R. Arantes",twitter:"pablitoarantes",github:"pablo-arantes",orcid:"0000-0003-1946-2750"},{name:"Marcelo D. Polêto",twitter:o,github:o,orcid:"0000-0001-9210-690X"},{name:"Conrado Pedebos",twitter:"ConradoPedebos",github:"cpedebos",orcid:null},{name:"Rodrigo Ligabue-Braun",twitter:"ligabue_braun",github:p,orcid:"0000-0002-2555-9754"}],body:{type:i,children:[{type:b,tag:c,props:{},children:[{type:a,value:j}]},{type:b,tag:c,props:{},children:[{type:a,value:k},{type:b,tag:d,props:{href:e,rel:[f]},children:[{type:a,value:e}]},{type:a,value:l},{type:b,tag:d,props:{href:g,rel:[f]},children:[{type:a,value:g}]},{type:a,value:m}]}],toc:{title:p,searchDepth:q,depth:q,links:[]}},_type:"markdown",_id:"content:notebooks:charmm-gui_openmm.md",_source:"content",_file:"notebooks\u002Fcharmm-gui_openmm.md",_extension:n}},prerenderedAt:1678872711988}}("text","element","p","a","https:\u002F\u002Fwww.charmm-gui.org\u002F","nofollow","https:\u002F\u002Fwww.youtube.com\u002Fchannel\u002FUCtHN7aNAjDet_JKWPxSioLQ",false,"root","This is a Jupyter notebook for running Molecular Dynamics (MD) simulations using OpenMM engine and CHARMM force field files. This notebook is a supplementary material of the paper \"Making it rain: Cloud-based molecular simulations for everyone\" and we encourage you to read it before using this pipeline.","In general, MD simulations rely on 1) a set of atomic coordinates of all atoms on a simulation box and 2) a set of force field parameters that describes the interaction energies between atoms.\nIn terms of CHARMM inputs, we wil need:\nA .crd and a .pdb file containing a set of atomic coordinates.\nThe respective .psf file containing the system topology.\nA toppar folder containing force field parameter files.\nA toppar.str file pointing to the force field files that we will use in our simulation.\nIn this notebook, we will simulate PDB 1AKI, a hen egg-white lysozyme. To build our simulation box, we will use CHARMM-GUI (",") solution builder feature. (Important: to use CHARMM-GUI, you must register for a free account). You can download the necessary input files from here;\nFor more information on how to create a solvated simulation box, please refer to CHARMM-GUI YouTube channel (",")","md","mdpoleto","",3))