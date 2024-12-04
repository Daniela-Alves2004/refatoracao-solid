### Documento de Entrega - Design Patterns Aplicados com Refatoração

**Aluna**:Daniela Dos Santos Alves 

---

#### **Objetivo da Lista**
Refatorar o sistema disponível no repositório GitHub para aplicar os seguintes padrões de projeto:  
- **Criacional**: Factory Method  
- **Estrutural**: Bridge  
- **Comportamental**: Template Method  

Além disso, justificar as escolhas de design e apresentar refatorações baseadas nos princípios **SOLID** para melhorar a estrutura, manutenção e extensibilidade do código. Um script de teste deve garantir a consistência das saídas esperadas após as alterações.

---

### 1. **Padrão Criacional: Factory Method**

**Definição**:  
O Factory Method fornece uma interface para criação de objetos em uma superclasse, permitindo que subclasses determinem quais objetos serão criados.

**Justificativa no Código Atual**:  
Atualmente, a criação de objetos `HTMLFormatter` e `TXTFormatter` ocorre diretamente no código principal, acoplando a lógica de geração de relatórios às classes concretas. O Factory Method encapsula essa criação em fábricas específicas, promovendo a adesão ao Princípio da Inversão de Dependência (**DIP**) do SOLID.

**Refatorações Baseadas em SOLID**:
1. **Princípio da Inversão de Dependência (DIP)**:  
   - **Problema**: O `CitiesReporter` depende diretamente das implementações concretas (`HTMLFormatter` e `TXTFormatter`).  
   - **Solução**: Criar uma interface abstrata `FormatterFactory` para encapsular a criação de formatadores e fazer o `CitiesReporter` depender dessa abstração.

2. **Princípio da Segregação da Interface (ISP)**:  
   - **Problema**: A interface da fábrica poderia incluir métodos irrelevantes para certos tipos de formatadores.  
   - **Solução**: Manter apenas o método `createFormatter` na interface, garantindo coesão.

3. **Princípio da Responsabilidade Única (SRP)**:  
   - **Problema**: O `CitiesReporter` atualmente gerencia a criação de objetos e formatação.  
   - **Solução**: Delegar a criação de objetos para fábricas específicas.

---

### 2. **Padrão Estrutural: Bridge**

**Definição**:  
O Bridge separa a abstração da implementação, permitindo que ambos evoluam independentemente.

**Justificativa no Código Atual**:  
As classes `HTMLFormatter` e `TXTFormatter` estão acopladas à lógica de formatação no `CitiesReporter`. O Bridge separa essa lógica, promovendo maior extensibilidade e aderência aos princípios SOLID.

**Refatorações Baseadas em SOLID**:
1. **Princípio da Responsabilidade Única (SRP)**:  
   - **Problema**: As classes formatadoras e o `CitiesReporter` possuem responsabilidades sobrepostas.  
   - **Solução**: Separar a lógica de geração de relatórios (abstração) da lógica de formatação (implementação).  

2. **Princípio Aberto/Fechado (OCP)**:  
   - **Problema**: Adicionar novos formatos exige alterações nas classes existentes.  
   - **Solução**: Implementar novas subclasses de `Formatter` sem modificar as existentes.  

---

### 3. **Padrão Comportamental: Template Method**

**Definição**:  
O Template Method define o esqueleto de um algoritmo em uma superclasse, delegando a implementação de passos específicos às subclasses.

**Justificativa no Código Atual**:  
As classes `HTMLFormatter` e `TXTFormatter` possuem lógica repetitiva. O Template Method organiza essa lógica em uma estrutura comum, promovendo reutilização e consistência.

**Refatorações Baseadas em SOLID**:
1. **Princípio da Responsabilidade Única (SRP)**:  
   - **Problema**: Métodos duplicados entre os formatadores.  
   - **Solução**: Extrair o esqueleto do algoritmo para uma classe base, delegando detalhes às subclasses.  

2. **Princípio da Inversão de Dependência (DIP)**:  
   - **Problema**: A lógica de formatação está acoplada às subclasses concretas.  
   - **Solução**: Utilizar o Template Method para encapsular a lógica comum, permitindo que subclasses concretas implementem detalhes específicos.

### 4. **Teste**  
Para verificar se os projetos estão funcionando, utilize os seguintes comandos no terminal, de acordo com o formato desejado.  

- **Para HTML**: na pasta onde o projeto está localizado, execute:  
  ```javascript
  node index.js html
  ```

- **Para TXT**: na pasta onde o projeto está localizado, execute:  
  ```javascript
  node index.js txt
  ```  
### 5. **Conclusão**

A aplicação dos padrões **Factory Method**, **Bridge** e **Template Method**, aliada às refatorações baseadas nos princípios **SOLID**, resulta em um sistema mais modular, extensível e de fácil manutenção. O script de teste garante que as alterações mantêm a consistência funcional