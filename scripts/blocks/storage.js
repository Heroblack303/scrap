//name of object, type of your content, file-name
const miniCore = extend(CoreBlock, "mini-core", {
	targetable: false,
	buildCostMultiplier: 3,
//is it possible to build a core regardless of another core, true or false.
canPlaceOn(tile, team, rotation){
        return true;
    },
//can this core replace another one
    canReplace(other){
        if(other instanceof CoreBlock) return true;
        return this.super$canReplace(other);
    },
//is it possible to break the core
    canBreak(tile){
    	return false;
    },
//adding build time for the core
    setStats(){
this.super$setStats();
if(this.canBeBuilt() && this.requirements.length > 0){
this.stats.add(Stat.buildTime, this.buildCost / 60, StatUnit.seconds);
        }
    }
})