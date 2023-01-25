<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!-- form:form -->
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/home.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container-fluid">
		<div class="toprow">
			<h1>Welcome, <c:out value="${loggedUser.name}"></c:out></h1>
			<a href="/logout">logout</a>
		</div>
		<div class="row">
			<a href="/songs/new">Add to the List</a>
		</div>
		<div class="row">
			<p>People are listening to:</p>
		</div>
		<div>
			<div class="tableChart">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Genre</th>
							<th>Title</th>
							<th>Posted</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="song" items="${songs}">
							<tr>
								<td id="data1" valign="middle"><c:out value="${song.genre}"/></td>
								<td valign="middle"><a href="/songs/${song.id}"><c:out value="${song.title}"/></a></td>
								<td id="data2" valign="middle">
									<c:set var="songdate" value="${song.createdAt}"/>
									<fmt:formatDate value="${songdate}" type="date"/>
								</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>