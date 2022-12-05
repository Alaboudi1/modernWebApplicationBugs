select top 10000 
    p.id as [Post Link],
    p.tags as [tag],
    p.ViewCount as [views],
    p.CreationDate as dateCreated
    

    
from 
    posts as p
where 
    p.posttypeid = 1
    and p.CreationDate between '2022-01-01' and '2022-12-31'
    and p.viewcount > 1000
order by p.viewcount desc