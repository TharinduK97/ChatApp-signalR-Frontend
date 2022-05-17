const ConnectedUsers = ({ users }) => <div className='user-list border border-success'>
    <h4>Connected Users</h4>
    {users.map((u, idx) => <h6 key={idx}><span class="badge badge-success">{u}</span></h6>)}
</div>

export default ConnectedUsers;