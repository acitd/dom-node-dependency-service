class DomNodeDependencyService{
	last_id=0;
	nodes={};
	constructor(root,delay=2000){
		this.root=root;
		this.delay=delay;
	}
	start(){
		this.interval=setInterval(()=>{
			for(const id in this.nodes)
				if(!this.root.contains(this.nodes[id].dependency)){
					for(const dependant of this.nodes[id].dependants)
						dependant.remove();
					delete this.nodes[id];
				}
		},this.delay);
	}
	stop(){
		clearInterval(this.interval);
	}
	dependency(target){
		if(!target.__dependency_id)
			target.__dependency_id=++this.last_id;
		if(!this.nodes[target.__dependency_id])
			this.nodes[target.__dependency_id]={dependency:target,dependants:[]};
		this.target=target;
		return this;
	}
	of(...dependants){
		this.nodes[this.target.__dependency_id].dependants.push(...dependants);
	}
}
