const jobs = [
    {id:1,  isactive:true},
    {id:2, isactive:true},
    {id:3, isactive:false}

];

const activejobs = jobs.filter(job => job.isactive);
console.log(activejobs);
