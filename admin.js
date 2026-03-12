<script>
// Check if user is admin
if(localStorage.getItem("isAdmin") !== "true"){
    alert("Access denied! Please log in first.");
    window.location.href = "login.html"; // redirect to login page
}
</script>