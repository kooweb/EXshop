$(function(){
        //登录用户名检察
            $("input[name='userName']").blur(function(){
            $this=$(this);
                var userName=$this.val();  
                if($this.val().length==0){
                   $this.parent().siblings(".uError").html('用户名不能为空');
                   $this.addClass("focus");
                }else{
                   $.post("javascript:void(0)",{'userName':username,'type':'login'},function(data){
                   $this.parent().siblings(".uError").html(data);
                   })
                   $(this).parent().siblings(".uError").html('');
                   $(this).removeClass("focus"); 
                }
            });
        //登录密码检察
            $("input[name='password']").blur(function () {
            $this=$(this);  
               if($this.val().length==0){
                  $this.parent().siblings(".uError").html('密码不能为空');
                  $this.addClass("focus"); 
                }else{
                  $this.parent().siblings(".uError").html('');
                  $this.removeClass("focus"); 
                }

           });
        //ajax登录
            $("#ajaxLogin").click(function(){
                  $this=$(this);
                  $("#loginForm").submit(); 
            })
        //注册用户名检察
            $("input[name='name']").blur(function () {
                  $this=$(this);
            var username=$this.val();  
                if($this.val().length==0){
                   $this.parent().siblings(".uError").html('用户名不能为空');
                   $this.addClass("focus"); 
                }else{
                   $.post("javascript:void(0)",{'username':username,'type':'register'},function(data){
                   $this.parent().siblings(".uError").html(data);
                })
                   $(this).parent().siblings(".uError").html('');
                   $(this).removeClass("focus"); 
                }
            });
        //注册密码检察
            $("input[name='pwd']").blur(function () {
                    $this=$(this);  
                if($this.val().length==0){
                    $this.parent().siblings(".uError").html('密码不能为空');
                    $this.addClass("focus"); 
                }else{
                    $this.parent().siblings(".uError").html('');
                    $this.removeClass("focus"); 
                }
            });
        //检验两次密码是否输入相同
            $("input[name='rpwd']").blur(function () {
                    $this=$(this); 
            var rpwd=$this.val(); 
                if($this.val().length==0){
                    $this.parent().siblings(".uError").html('密码不能为空');
                    $this.addClass("focus"); 
                }else{
            var pwd=$("input[name='pwd']").val();
                if(pwd!=rpwd){
                    $this.parent().siblings(".uError").html('两次密码输入不正确');
                    $this.addClass("focus"); 
                }else{
                    $this.parent().siblings(".uError").html('');
                    $this.removeClass("focus"); 
                }
                }
        });
        //ajax注册
        $("#ajaxRegister").click(function(){
            $this=$(this);
            $("#registerForm").submit();
            window.location.href='index_abanderar.html';
        })
    })
//	    function refresh(){
//          var url='javascript:void(0)'+Math.random();
//                 $('#authcode').attr('src', url);
//	    }
