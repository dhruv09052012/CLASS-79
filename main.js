var stu_names=[];

function submit()
{
    var name_1=document.getElementById("stu_1").value;
    var name_2=document.getElementById("stu_2").value;
    var name_3=document.getElementById("stu_3").value;
    var name_4=document.getElementById("stu_4").value;
    var name_5=document.getElementById("stu_5").value;

    stu_names.push(name_1);
    stu_names.push(name_2);
    stu_names.push(name_3);
    stu_names.push(name_4);
    stu_names.push(name_5);

    console.log(stu_names);
    document.getElementById("display_name").innerHTML=stu_names;
    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";
}

function sort()
{
    stu_names.sort();
    console.log(stu_names);
    document.getElementById("display_name").innerHTML=stu_names;
}