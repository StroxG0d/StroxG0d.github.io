
function livro (id, nome, autores, estilo){
	this.id = id;
	this.nome = nome;
	this.autores = autores;
	this.estilo = estilo;
}

function adicionarLivro(livro){}
function removerLivro(livro){}

var listaLivros = [];

function limpar(){
	$("#titulo").val("");
	$("#descricao").val("");
	$("#autores").val("");
	$("#estilo").val("");
}
		
$(function(){
	$("#adicionar").click(function(){
		var tituloLivro = $("#titulo").val();
		var autores = $("#autores").val();
		var estilo = $("#estilo").val();
		var descricao = $("#descricao").val();
		$("#acervo").append(
			$("<tr>")
				.append($("<td>").text(tituloLivro))
				.append($("<td>").text(autores))
				.append($("<td>").text(estilo))
				.append($("<td>").text(descricao))
				.append($("<td>")
				.append($("<a>")
				.attr("href", "#")
				.text("Apagar"))
			)
		)
		limpar()
	});

	$("#acervo").on("click", "a", function(){
		$(this).parents("tr").remove();
	})

	$("#excluir").click(limpar)

	$("#apagarAcervo").click(function(){
		$("#acervo").empty();
		$("#acervo")
			.append($("<tr>")
			.append($("<th>").text("Título"))
			.append($("<th>").text("Autores"))
			.append($("<th>").text("Estilo"))
			.append($("<th>").text("Descrição"))
		)
	})

	$("#enviar").click(function(){
		let url = "https://157.230.5.17/web/livros.php";
		
		let dados = $("#dados").val();  
		$.post(url, dados, function(data,status){
			alert("Data: " + data + "\nStatus: " + status);
		}
		);
	})
});