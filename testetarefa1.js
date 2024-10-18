const {Builder, By, Key, until} = require('selenium-webdriver');

(async function runTests() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Cenário 1: Teste de log play
        console.log('Iniciando Cenário 1: Teste de log play');
        await driver.get('https://sistemaplaybpo.com.br');
        console.log('Página carregada');

        await driver.manage().window().setRect({width: 856, height: 698});
        console.log('Tamanho da janela ajustado');

        // Clicar no botão com seletor CSS
        await driver.findElement(By.xpath("//button[contains(@class, 'button')]")).click();
        console.log('Botão clicado');

        // Inserir o email
        await driver.findElement(By.id('mat-input-0')).sendKeys('thauan.ouriques@playbpo.com.br');
        console.log('Email inserido');

        // Inserir a senha e enviar o formulário
        await driver.findElement(By.id('mat-input-1')).sendKeys('123456', Key.RETURN);
        console.log('Senha inserida');

        // Espera que um elemento específico apareça após o login
        await driver.wait(until.elementLocated(By.css('.dashboard-element')), 20000); // Substitua ".dashboard-element" por um seletor CSS exclusivo da página pós-login
        console.log('Login efetuado e dashboard carregado');

        // Continuar com o próximo cenário
        console.log('Iniciando Cenário 2: Execução de tarefa');
        // ...

    } catch (error) {
        console.error('Erro durante a execução do teste:', error);
    } finally {
        console.log('Fechando o navegador');
        await driver.quit();
    }
})();
