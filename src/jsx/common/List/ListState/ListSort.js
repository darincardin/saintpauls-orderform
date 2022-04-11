class ListSort {
	by = "id";
	dir = "ASC";
	
	constructor(by = "id", dir ){
		this.by = by;
		if(dir)this.dir = dir;
	}
	
	next(by){
		var newSort = new ListSort(by);
	
		if(this.by == newSort.by)  newSort.dir = this.dir=="ASC" ? "DESC" : "ASC";

		return newSort;
	}
	
	isActive(name){
		return (this.by == name) ? this.dir:"";
	}
	
    get(){
		return {by:this.by, dir:this.dir}
	}
}

export default ListSort;