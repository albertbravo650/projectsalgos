<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Music Mood</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container-fluid">
		<div class="row">
			<h1><c:out value="${song.title}"></c:out></h1>
			<a href="/songs">Dashboard</a>
		</div>
		<div class="row">
			<p>Artist: <c:out value="${song.artist}"></c:out></p>
		</div>
		<div class="row">
			<p>Genre: <c:out value="${song.genre}"></c:out></p>
		</div>
		<div class="row">
			<p>Comment: <c:out value="${song.comment}"></c:out></p>
		</div>
		<div class="row">
			<c:if test="${loggedUser.id == song.creator.id}" >
				<div class="buttons">
					<p><a href="/songs/${song.id}/edit" class="btn btn-warning">edit</a></p>
					<form action="/songs/${song.id}/delete" method="post">
						<input type="hidden" name="_method" value="delete">
						<input type="submit" id="deletebtn" class="btn btn-danger" value="delete"/>
					</form>
				</div>
			</c:if>
		</div>
	</div>
</body>
</html>