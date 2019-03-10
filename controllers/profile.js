const handleProfile=(req, res,knex) => {
    const { id } = req.params;
    let found = false;
    knex.select('*').from('users').where({
        id: id
    }).then(user => {
        if (user.length) {
            res.json(user[0])
        } else {
            res.json('user not found');
        }
    })
        .catch(err => res.json(err))
}
module.exports={
    handleProfile
}