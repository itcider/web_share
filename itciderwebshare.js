
function snsShare(title, url){

if(navigator.share){

navigator.share({
title: '	[##_article_rep_title_##]', // 공유될 제목
  text: '	[##_article_rep_desc_##]', // 공유될 설명
  url: '[##_article_rep_link_##]', // 공유될 URL

});
$().ready(function () {
            $("#shared").click(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center-center',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: '공유해주셔서 감사합니다 :> <br>좋은 하루 보내세요~'
                })
            });
        });

}else 

$().ready(function () {
            $("#shared").click(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center-center',
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'error',
                    title: '공유가 지원되지 않는 브라우저입니다 :< <br> 왼쪽의 링크 복사 버튼 이용 부탁드립니다 :>'
                })
            });
        });


}
