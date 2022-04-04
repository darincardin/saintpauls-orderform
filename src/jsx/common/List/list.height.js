const ROW_SIZE = 40;

class ListHeight {

	static updatePageSize(ref){
		
		var height =  ref.current.parentElement.offsetHeight  ;				
		var value = Math.floor((height/ROW_SIZE)) -3;
		return  value || 1;
	}
}


export default ListHeight;