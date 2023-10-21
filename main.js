// Importe a biblioteca
const QRCode = require('qrcode-generator');

// Texto que você deseja codificar no QR code
const textoParaQRCode = 'ID 125408 - CESTA BÁSICA, Composta por: 2kg de açúcar cristal; 5kg de arroz tipo 1; 02 pacotes de bolacha cream cracker (com 400g cada); 500g de café em pó; 4 latas de salsicha tipo Viena(com 180g cada); 2kg de farinha de mandioca amarela; 2kg de feijão carioca; 800g de leite em pó INTEGRAL; 02 pacotes de macarrão espaguete (com 500g cada); 02 pets de óleo de soja comestível (com 900ml cada); 2kg de sal; 04 conservas de carne em lata (com no mínimo 320g cada), TIPO: DESFIADA. Embalados em uma sacola de plástico resistente'; // Substitua pelo seu URL

// Crie o QR code
const qrcode = QRCode(0, 'L'); // L é o nível de correção de erros, você pode ajustá-lo
qrcode.addData(textoParaQRCode);
qrcode.make();

// URL do QR code em formato de imagem SVG
const qrCodeSVG = qrcode.createSvgTag();

// Encontre o elemento "qrcode" no DOM
const qrCodeContainer = document.getElementById('qrcode');

// Injete o código SVG no elemento "qrcode"
qrCodeContainer.innerHTML = qrCodeSVG;
