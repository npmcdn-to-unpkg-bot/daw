package es.urjc.code.daw.library.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Security configuration. In this class can be configured several aspects
 * related to security:
 * <ul>
 * <li>Security behavior: Login method, session management, CSRF, etc..</li>
 * <li>Authentication provider: Responsible to authenticate users. In this
 * example, we use an instance of UserRepositoryAuthProvider, that authenticate
 * users stored in a Spring Data database.</li>
 * <li>URL Access Authorization: Access to http URLs depending on Authenticated
 * vs anonymous users and also based on user role.</li>
 * </ul>
 * 
 * NOTE: The only part of this class intended for app developer customization is
 * the method <code>configureUrlAuthorization</code>. App developer should
 * decide what URLs are accessible by what user role.
 */
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	public UserRepositoryAuthProvider userRepoAuthProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		configureUrlAuthorization(http);

		// Disable CSRF protection (it is difficult to implement with ng2)
		http.csrf().disable();

		// Use Http Basic Authentication
		http.httpBasic();

		// Do not redirect when logout
		http.logout().logoutSuccessHandler((rq, rs, a) -> {
		});
	}

	private void configureUrlAuthorization(HttpSecurity http) throws Exception {

		// APP: This rules have to be changed by app developer

		// URLs that need authentication to access to it
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/books/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/books/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/books/**").hasRole("ADMIN");
		// TipoComidas
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/tipocomidas/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/tipocomidas/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/tipocomidas/**").hasRole("ADMIN");
		// Restaurantes
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/restaurantes/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/restaurantes/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/restaurantes/**").hasRole("ADMIN");
		// Recetas
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/comidas/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/comidas/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/comidas/**").hasRole("USER");
		// Usuarios
		//http.authorizeRequests().antMatchers(HttpMethod.POST, "/user/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/user/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/user/**").hasRole("USER");

		// Other URLs can be accessed without authentication
		http.authorizeRequests().anyRequest().permitAll();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		// Database authentication provider
		auth.authenticationProvider(userRepoAuthProvider);
	}
}