function pagination(pageNumber,sizeNumber){
    let page=0
    if(typeof Number(pageNumber) && (pageNumber)>0){
        page=pageNumber
    }
    let size=1
    if(typeof Number(sizeNumber) && (sizeNumber)>1){
        size=sizeNumber
    }
    return {page,size}
}
module.exports={pagination}