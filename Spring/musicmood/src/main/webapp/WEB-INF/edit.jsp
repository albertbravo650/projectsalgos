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
			<h1>Edit</h1>
			<a href="/songs">Dashboard</a>
		</div>
		<div class="row">
			<div class="col">
				<form:form action="/songs/${song.id}" method="post" modelAttribute="song">
					<input type="hidden" name="_method" value="put"/>
					<div class="row my-4">
						<form:label path="genre" class="col-3">Genre:</form:label>
						<form:select path="genre" class="col-8">
							<form:option value="Alternative Rock"/>
							<form:option value="Blues/Jazz"/>
							<form:option value="Classical"/>
							<form:option value="Country/Folk"/>
							<form:option value="Disco"/>
							<form:option value="Hip-Hop"/>
							<form:option value="Indie"/>
							<form:option value="Metal"/>
							<form:option value="Pop"/>
							<form:option value="Punk"/>
							<form:option value="R&B"/>
							<form:option value="Rap"/>
							<form:option value="Reggae"/>
							<form:option value="Rock"/>
						</form:select>
						<form:errors path="genre" class="text-danger offset-3"/>
					</div>
					<div class="row my-4">
						<form:label path="title" class="col-3">Title:</form:label>
						<form:input path="title" class="col-8"/>
						<form:errors path="title" class="text-danger offset-3"/>
					</div>
					<div class="row my-4">
						<form:label path="artist" class="col-3">Artist:</form:label>
						<form:input path="artist" class="col-8"/>
						<form:errors path="artist" class="text-danger offset-3"/>
					</div>
					<div class="row my-4">
						<form:label path="comment" class="col-3">Comment:</form:label>
						<form:textarea path="comment" class="col-8"/>
						<form:errors path="comment" class="text-danger offset-3"/>
					</div>
					<form:input type="hidden" path="creator" value="${loggedUser.id}"/>
					<input class="btn btn-primary" type="submit" value="Update">
				</form:form>
			</div>
		</div>
	</div>
</body>
</html>