# Preenchimento boleto

O preenchimento do boleto deve ser feito de acordo com o método abaixo

::: warning Aviso!
O campo **nossoNumero** é uma informação equivalente ao **numeroBoleto**, e deve ser utilizado de forma incremental/unica para cada emissão
de um novo boleto
:::

```java
private BoletoModel preencheBoleto() {
    BoletoModel boleto = new BoletoModel();

    Beneficiario beneficiario = new Beneficiario();
    beneficiario.setAgencia("4342");
    beneficiario.setCarteira("09");
    beneficiario.setConta("59529");
    beneficiario.setDocumento("00000000000101");
    beneficiario.setNomeBeneficiario("EMPRESA DE TESTE");
    beneficiario.setDigitoAgencia("7");
    beneficiario.setPostoDaAgencia(null);
    beneficiario.setDigitoConta("2");
    beneficiario.setNumeroConvenio("1457020");

    Endereco enderecoBenef = new Endereco();
    enderecoBenef.setBairro("CENTRO");
    enderecoBenef.setCep("96030400");
    enderecoBenef.setCidade("PELOTAS");
    enderecoBenef.setComplemento("");
    enderecoBenef.setLogradouro("RUA OLAVO BILAC");
    enderecoBenef.setNumero("722");
    enderecoBenef.setUf("RS");
    beneficiario.setEndereco(enderecoBenef);
    boleto.setBeneficiario(beneficiario);

    Pagador pagador = new Pagador();
    pagador.setNome("SAMUEL BORGES DE OLIVEIRA");
    pagador.setDocumento("01713390108"); // <- PIX
    pagador.setCodigo("999");

    Endereco endereco = new Endereco();
    endereco.setLogradouro("Endereco Teste");
    endereco.setNumero("0");
    endereco.setBairro("Centro");
    endereco.setComplemento("Qd 0 Lote 0");
    endereco.setCep("75120683");
    endereco.setCidade("ANAPOLIS");
    endereco.setUf("GO");
    pagador.setEndereco(endereco);

    boleto.setPagador(pagador);

    boleto.setNossoNumero("00000000002");
    boleto.setDigitoNossoNumero("8");
    boleto.setValorBoleto(BigDecimal.TEN);
    boleto.setDataVencimento(LocalDate.of(2022, 6, 30));

    List<InformacaoModel> locaisPagamento = new ArrayList<>();
    locaisPagamento.add(new InformacaoModel("PAGÁVEL PREFERENCIALMENTE EM CANAIS DA SUA INSTITUIÇÃO FINANCEIRA"));
    boleto.setLocaisDePagamento(locaisPagamento);

    boleto.setDataEmissao(LocalDate.now());
    boleto.setNumeroDocumento("000004852");
    boleto.setEspecieDocumento("01");
    boleto.setAceite(false);
    boleto.setEspecieMoeda("REAL");

    List<InformacaoModel> instrucoes = new ArrayList<>();
    instrucoes.add(new InformacaoModel("PROTESTO AUTOMÁTICO APÓS 5 DIAS DO VENCIMENTO"));
    boleto.setInstrucoes(instrucoes);

    boleto.setTipoJuros(TipoJurosEnum.PERCENTUAL_MENSAL);
    boleto.setDiasJuros(1);
    boleto.setValorPercentualJuros(BigDecimal.valueOf(9.9));
    boleto.setTipoMulta(TipoMultaEnum.PERCENTUAL);
    boleto.setDiasMulta(1);
    boleto.setValorPercentualMulta(BigDecimal.valueOf(2.00));
    boleto.setTipoDesconto(TipoDescontoEnum.PERCENTUAL_DIA);
    boleto.setProtesto(true);
    boleto.setDiasProtesto(5);
    boleto.setNegativacaoAutomatica(false);
    boleto.setTipoImpressao("A");
    boleto.setEspecieMoeda("REAL");
    boleto.setCodigosEmpresa("5373762");

    return boleto;
}
```