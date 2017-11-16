var $add = $('.add')

$add.on('click',function(){
    $.ajax({
        url:'/loadMore',
        method:'get'
    }).done(function(ret){
        
       var fragment = new DocumentFragment()
        ret.forEach(function(list){
            var node = document.createElement('li')
            node.innerHTML = '<div class="cover" ><button>立即抢购</button></div><img><div class="name"></div><div class="price"></div>'
            $(node).find('img').attr('src',list.img)
            $(node).find('.name').append(list.name)
            $(node).find('.price').append(list.price)  
            $(node).appendTo(fragment)
             
        })
            $(fragment).appendTo('.list')
           
        
    })
})
